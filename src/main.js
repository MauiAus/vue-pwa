import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'

/* FortAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* v-charts */
import VeBar from 'v-charts/lib/bar.common'
import VeLine from 'v-charts/lib/line.common'
import VeRadar from 'v-charts/lib/radar.common'
import VeHistogram from 'v-charts/lib/histogram.common'

/* vuetrend */
import Trend from 'vuetrend'

/* FortAwesome */
library.add(faFacebookF)
library.add(faCreditCard)

/* FortAwesome */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* v-charts */
Vue.component(VeBar.name, VeBar)
Vue.component(VeLine.name, VeLine)
Vue.component(VeRadar.name, VeRadar)
Vue.component(VeHistogram.name, VeHistogram)

/* vuetrend */
Vue.use(Trend)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
