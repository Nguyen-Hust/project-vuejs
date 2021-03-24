import Vue from 'vue'
import App from './App.vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
  state:{
    Products:[
      {
        id:1,
        name: "YEEZY BOOST 380 ADULTS",
        gender: 1,
        color: "Covellite",
        sizes: { UK: 9.5 },
        price: 6300000, 
        pairsOfShoesLeft: 17,
        amount:1
      },
      {
        id:2,
        name: "HU NMD",
        gender: 2,
        color: "Core Black",
        sizes: { UK: 4.5 },
        price: 6000000, 
        pairsOfShoesLeft: 3,
        amount:1
      }
    ]
  },
  getters:{
    GetProducts: state=>{
      return state.Products
    },
  },
  mutations:{
    DeleteProduct(state, index){
      state.Products.splice(index, 1)
    },
    UpdateCount(state, params){
      console.log( params[0])
      state.Products[params[0]].count = params[1]
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App), 
  store
})
