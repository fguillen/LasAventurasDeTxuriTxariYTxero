import Vue from 'vue'
import App from './App.vue'
import Ini from './components/Ini.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/ini', component: Ini }
]

const router = new VueRouter({
  routes: routes
})


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
