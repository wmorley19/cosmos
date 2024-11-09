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
# All changes Copyright 2023, OpenC3, Inc.
# All Rights Reserved
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.
*/

import { createRouter, createWebHistory } from 'vue-router'
import { prependBasePath } from '@openc3/tool-common/src/utils/routeUtils.js'

const routes = [
  {
    path: '',
    component: () => import('./tools/CmdTlmServer/CmdTlmServer.vue'),
    children: [
      {
        component: () => import('./tools/CmdTlmServer/InterfacesTab'),
        path: '',
      },
      {
        component: () => import('./tools/CmdTlmServer/InterfacesTab'),
        name: 'InterfacesTab',
        path: 'interfaces',
      },
      {
        component: () => import('./tools/CmdTlmServer/TargetsTab'),
        name: 'TargetsTab',
        path: 'targets',
      },
      {
        component: () => import('./tools/CmdTlmServer/CmdPacketsTab'),
        name: 'CmdPacketsTab',
        path: 'cmd-packets',
      },
      {
        component: () => import('./tools/CmdTlmServer/TlmPacketsTab'),
        name: 'TlmPacketsTab',
        path: 'tlm-packets',
      },
      {
        component: () => import('./tools/CmdTlmServer/RoutersTab'),
        name: 'RoutersTab',
        path: 'routers',
      },
      {
        component: () => import('./tools/CmdTlmServer/StatusTab'),
        name: 'StatusTab',
        props: { refreshInterval: 5000 },
        path: 'status',
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@openc3/tool-common/src/components/NotFound'),
  },
]

routes.forEach(prependBasePath)

export default createRouter({
  history: createWebHistory(),
  routes,
})
