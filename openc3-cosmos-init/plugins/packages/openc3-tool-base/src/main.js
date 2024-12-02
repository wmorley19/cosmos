import { createApp } from 'vue'
import { defineCustomElements } from '@astrouxds/astro-web-components/loader'
import { Notify, store } from '@openc3/vue-common/plugins'
import ToolCommon from '@openc3/tool-common/plugin'
// TODO: import '@openc3/tool-common/src/assets/stylesheets/layout/layout.scss'

import App from './App.vue'
import vuetify from '@openc3/tool-common/src/plugins/vuetify'
import router from './router'

defineCustomElements()

Object.getPrototypeOf(System).firstGlobalProp = true;

const app = createApp(App)

app.use(store)
app.use(vuetify)
app.use(router)
app.use(Notify, { store })
app.use(ToolCommon)

const options = OpenC3Auth.getInitOptions()
OpenC3Auth.init(options).then(() => {
  // Set the scope variable that will be used for the life of this page load
  // It is always default in standard edition
  window.openc3Scope = 'DEFAULT'

  app.mount('#openc3-main')
})
