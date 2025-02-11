from openc3.interfaces.stream_interface import StreamInterface
import pyvisa
from openc3.config.config_parser import ConfigParser
from openc3.utilities.logger import Logger


# Class for interfaces that act as VISA clients
class VisaClientInterface(StreamInterface):
    def __init__(
        self,
        resource_name,  # VISA resource name (TCPIP0::192.168.0.100::INSTR)
        write_timeout,  
        read_timeout,   
    ):
        super().__init__()
        self.resource_name = resource_name
        self.write_timeout = write_timeout
        self.read_timeout = read_timeout

        # Initialize VISA resource manager
        self.rm = pyvisa.ResourceManager()

    def connection_string(self):
        return f"VISA Resource: {self.resource_name}"

    def connect(self):
        """Establish the VISA connection using the provided resource name."""
        try:
            self.instrument = self.rm.open_resource(self.resource_name)
            self.instrument.timeout = self.read_timeout
            self.connected = True
            Logger.info(f'Connected to VISA interface: {self.resource_name}')
        except pyvisa.VisaIOError as e:
            Logger.error(f'Error connecting to VISA interface: {self.resource_name}')
            raise e

    def disconnect(self):
        """Disconnect the VISA resource and close the connection."""
        if self.connected:
            self.instrument.close()
            self.connected = False
            Logger.info(f'Disconnected from VISA interface: {self.resource_name}')
    
    def write(self, data):
        """Write data to the VISA instrument."""
        if not self.connected:
            raise RuntimeError("Not connected to any VISA instrument.")

        try:
            self.instrument.write(data)
            Logger.info(f'Written data to VISA instrument: {data}')
        except pyvisa.VisaIOError as e:
            Logger.error(f'Error writing data to VISA instrument: {data}')
            raise e

    def read(self):
        """Read data from the VISA instrument."""
        if not self.connected:
            raise RuntimeError("Not connected to any VISA instrument.")
        
        try:
            data = self.instrument.read()
            Logger.info(f'Read data from VISA instrument: {data}')
            return data
        except pyvisa.VisaIOError as e:
            Logger.error('Error reading data from VISA instrument.')
            raise e
