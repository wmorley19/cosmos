<!--
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
-->

<template>
  <image
    v-if="imageUrl"
    :href="imageUrl"
    :x="parameters[1]"
    :y="parameters[2]"
    :width="width"
    :height="height"
    :style="pointerStyle"
    @click="clickHandler"
  />
</template>

<script>
import Widget from './Widget'
import ImageLoader from './ImageLoader'

export default {
  mixins: [Widget, ImageLoader],
  data: function () {
    return {
      imageUrl: null,
      screenTarget: null,
      screenName: null,
    }
  },
  computed: {
    width: function () {
      if (this.parameters[3]) {
        return `${this.parameters[3]}px`
      }
      return '100%'
    },
    height: function () {
      if (this.parameters[4]) {
        return `${this.parameters[4]}px`
      }
      return '100%'
    },
    pointerStyle() {
      if (this.screenTarget && this.screenName) {
        return {
          cursor: 'pointer',
        }
      } else {
        return {
          cursor: 'default',
        }
      }
    },
  },
  created: function () {
    // Look through the settings and get a reference to the screen
    this.appliedSettings.forEach((setting) => {
      if (setting[0] === 'SCREEN') {
        this.screenTarget = setting[1]
        this.screenName = setting[2]
      }
    })

    if (!this.parameters[0].startsWith('http')) {
      this.getPresignedUrl(this.parameters[0]).then((response) => {
        this.imageUrl = response
      })
    } else {
      this.imageUrl = this.parameters[0]
    }
  },
  methods: {
    clickHandler() {
      if (this.screenTarget && this.screenName) {
        this.$emit('open', this.screenTarget, this.screenName)
      }
    },
  },
}
</script>
