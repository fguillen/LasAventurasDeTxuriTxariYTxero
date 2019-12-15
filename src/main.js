import Vue from 'vue'
import App from './App.vue'
import Ini from './components/Ini.vue'
import Read from './components/Read.vue'
import Buy from './components/Buy.vue'

import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.use(VueRouter)


Vue.config.productionTip = false

const routes = [
  { path: '/', component: Ini },
  { path: '/read', component: Read },
  { path: '/buy', component: Buy }
]

const router = new VueRouter({
  routes: routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
