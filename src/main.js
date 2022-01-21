import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import './global-components'
import VueFetch from './plugins/fetch'

Vue.use(VueFetch)

new Vue({
  el: '#app',
  router,
  render: h => h(AppLayout),
})