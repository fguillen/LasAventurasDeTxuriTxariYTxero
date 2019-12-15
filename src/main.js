import Vue from 'vue'
import App from './App.vue'
import Ini from './components/Ini.vue'
import Read from './components/Read.vue'

import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.use(VueRouter)


Vue.config.productionTip = false

const routes = [
  { path: '/', component: Ini },
  { path: '/read', component: Read }
]

const router = new VueRouter({
  routes: routes
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
