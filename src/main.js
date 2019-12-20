import Vue from 'vue'
import App from './App.vue'
import Ini from './components/Ini.vue'
import Read from './components/Read.vue'
import Buy from './components/Buy.vue'

import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import VueGtag from "vue-gtag";

Vue.use(VueScrollTo)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'ini', component: Ini },
  { path: '/read', redirect: '/read/cover' },
  { path: '/read/:chapterId', name: 'read', component: Read },
  { path: '/buy', name: 'buy', component: Buy }
]

const router = new VueRouter({
  routes: routes,
  scrollBehavior (to, from) {
    console.log("scrollBehavior");
    if(to.name == "read" && from.name == "read") {
      return;
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: "history"
})

Vue.use(VueGtag, {
  config: { id: "UA-154550284-1" },
  appName: 'Las aventuras de txuri, txari y txero'
}, router);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
