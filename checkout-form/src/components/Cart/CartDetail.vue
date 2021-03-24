<template>
    <div class="cart-detail">
        <product v-for="(product, index) in GetProducts" :key="index" v-bind:product="product" v-bind:index="index"></product>
    </div>
</template>
<script>
import Product from './Product.vue'
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(["GetProducts"])
    },
    components:{
        Product
    }
}
</script>
<style>
    
</style>