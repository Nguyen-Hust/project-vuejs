import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export const store =new VueX.Store({
    state:{
        recipes:[]
    },
    mutations:{
        updateFood(state, food){
            state.recipes.push(food)
        },
    },
    getters:{
        GetList: state=>{
            return state.recipes
        },
    }
})