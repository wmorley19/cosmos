# encoding: ascii-8bit

# Copyright 2014 Ball Aerospace & Technologies Corp.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt

require 'win32ole'
require 'fileutils'

module Cosmos
  # Open an Excel spreadsheet and build an easily manipulated spreadsheet in ruby
  class ExcelSpreadsheet
    attr_reader :worksheets

    # Class to allow easy manipulation to the data in an Excel worksheet
    class ExcelWorksheet
      attr_reader :name, :num_rows, :num_columns, :data

      # @param worksheet [WIN32OLE] The underlying Excel worksheet object
      def initialize(worksheet)
        @name = worksheet.name
        @num_rows = worksheet.UsedRange.rows.count
        @num_columns = worksheet.UsedRange.columns.count

        # Get Excel Data from Worksheet
        @data = worksheet.UsedRange.value

        # Build a lookup table based on the first column
        @lkup = {}
        @data.each do |row|
          @lkup[row[0]] = row[1..-1]
        end
      end

      def keys
        @lkup.keys
      end

      # Access the lookup values by string or the raw data by index
      def [](index)
        if index.is_a? String
          @lkup[index]
        else
          @data[index]
        end
      end
    end

    # @param filename [String] Name of the Excel file to open
    # @param archive [true|String] If true, create an archive file in the
    #   default system LOGS directory. If an absolute path, create the
    #   archive file in the specified path.
    def initialize(filename, archive: nil)
      if archive
        time = Time.now.sys
        timestamp = sprintf("%04u_%02u_%02u_%02u_%02u_%02u", time.year, time.month, time.mday, time.hour, time.min, time.sec)
        # If archive is true we use the system LOGS path
        if archive == true
          archive = Cosmos::System.paths['LOGS']
        end
        archive = File.join(archive, "#{timestamp}_#{File.basename(filename)}")
        FileUtils.cp filename, archive
        File.chmod(0444, archive) # Mark read-only
      end

      excel = WIN32OLE.new('excel.application')
      excel.visible = false
      wb = excel.workbooks.open(filename)

      @worksheets = {}
      count = wb.worksheets.count
      count.times do |index|
        ws = wb.worksheets(index + 1)
        @worksheets[ws.name] = ExcelWorksheet.new(ws)
      end

      excel.DisplayAlerts = false
      excel.quit
      excel = nil
      GC.start
    end

    # @return [Array<String>] Array of all the worksheet names
    def worksheets
      @worksheets.keys
    end
    alias keys worksheets

    # Access a worksheet by passing in the name
    #
    # @param name [String] Name of the worksheet
    # @return [ExcelWorksheet] The worksheet object
    def [](name)
      @worksheets[name]
    end
  end
end
