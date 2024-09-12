/*
# Copyright 2022 Ball Aerospace & Technologies Corp.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.

# Modified by OpenC3, Inc.
# All changes Copyright 2022, OpenC3, Inc.
# All Rights Reserved
#
# This file may also be used under the terms of a commercial license 
# if purchased from OpenC3, Inc.
*/

import { createVuetify } from 'vuetify'
import { AstroIconVuetifyValues } from '../components/icons/index.js'

export default createVuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#005a8f',
        secondary: '#4dacff',
        tertiary: '#283f58',
      },
      light: {
        primary: '#cce6ff',
        secondary: '#cce6ff',
      },
    },
  },
  icons: {
    values: {
      ...AstroIconVuetifyValues,
    },
  },
})
