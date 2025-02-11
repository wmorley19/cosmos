import select
import socket
import threading
import multiprocessing
import pyvisa
from openc3.streams.stream import Stream
from openc3.config.config_parser import ConfigParser
from openc3.utilities.logger import Logger
from openc3.top_level import close_socket

class VisaStream(Stream):
    def __init__(self, resource_name, write_socket, read_socket, write_timeout, read_timeout, rm):
        super().__init__()
        self.resource_name = resource_name  # VISA resource name (e.g., TCPIP0::192.168.0.100::INSTR)
        self.write_socket = write_socket
        self.read_socket = read_socket
        self.write_timeout = ConfigParser.handle_none(write_timeout)
        self.read_timeout = ConfigParser.handle_none(read_timeout)
        self.rm = rm if rm else pyvisa.ResourceManager()
        self._connected = False

        if self.write_timeout is None:
            self.write_timeout = 10.0  # Default timeout if not provided

        if self.read_timeout is None:
            self.read_timeout = None  # Block until data is received if not specified

        # Mutex on write is needed to protect from commands coming in from more
        # than one tool
        self.write_mutex = threading.Lock()
        self.pipe_reader, self.pipe_writer = multiprocessing.Pipe()

    # Modify read() to interact with VISA device
    def read(self):
        if not self._connected:
            raise RuntimeError("Attempt to read from an unconnected VISA stream")

        data = ""
        try:
            data = self.instrument.read()
        except pyvisa.VisaIOError as e:
            Logger.error(f"Error reading from VISA resource: {e}")
            raise e
        return data

    # Modify write() to interact with VISA device
    def write(self, data):
        if not self._connected:
            raise RuntimeError("Attempt to write to an unconnected VISA stream")

        with self.write_mutex:
            try:
                self.instrument.write(data)
            except pyvisa.VisaIOError as e:
                Logger.error(f"Error writing to VISA resource: {e}")
                raise e

    def connect(self):
        if not self._connected:
            try:
                self.instrument = self.rm.open_resource(self.resource_name)
                self.instrument.timeout = self.write_timeout * 1000  # pyvisa timeout in milliseconds
                self._connected = True
                Logger.info(f"Connected to VISA resource: {self.resource_name}")
            except pyvisa.VisaIOError as error:
                Logger.error(f"Error connecting to VISA resource: {self.resource_name} - {error}")
                raise error

    def disconnect(self):
        if not self._connected:
            return
        try:
            self.instrument.close()
            Logger.info(f"Disconnected from VISA resource: {self.resource_name}")
        except pyvisa.VisaIOError as error:
            Logger.error(f"Error closing VISA resource: {self.resource_name} - {error}")
        self._connected = False
        close_socket(self.write_socket)
        close_socket(self.read_socket)
        self.pipe_writer.send(".")

