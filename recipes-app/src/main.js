import Vue from 'vue'
import App from './App.vue'
import {store} from './store.js'
import {routes} from './route.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router =new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
