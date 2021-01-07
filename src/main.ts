import Vue from 'nativescript-vue'
import Start from './components/Start.vue'
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'PullToRefresh',
  () => require('@nstudio/nativescript-pulltorefresh').PullToRefresh
);

new Vue({
  store,
  render: h => h('frame', [h(Start)])
}).$start()
