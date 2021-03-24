import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export const store = new VueX.Store({
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
      ],
      Filter: {
        isPromotion: false,
      }
    },
    getters:{
      GetProducts: state=>{
        return state.Products
      },
      GetProductInfo: state=>{
        let products = []
        state.Products.forEach(element => {
            products.push({name:element.name, amount:element.amount, price:element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")})
        });
        return products
      },
      GetCount: state=>{
          return state.Products.length
      },
      GetFilter: state=>{
        return state.Filter.isPromotion
      },
      GetToTalProduct: state=>{
        let total = 0
        state.Products.forEach(element => {
            total += element.amount * element.price
        });
        return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      GetToTal: state=>{
        let total = 0
        state.Products.forEach(element => {
            total += element.amount * element.price
        });
        if(state.Filter.isPromotion)
            total*=0.75
        return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    },
    mutations:{
      DeleteProduct(state, index){
        state.Products.splice(index, 1)
      },
      UpdateAmount(state, params){
        state.Products[params[0]].amount = params[1]
      },
      UpdatePromotion(state, isPromotion){
          state.Filter.isPromotion = isPromotion
      }
    }
  })