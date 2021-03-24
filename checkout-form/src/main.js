import Vue from 'vue'
import App from './App.vue'
import {store} from './store.js'
import VueRouter from 'vue-router'
import {routes} from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  render: h => h(App), 
  store,
  router
})
