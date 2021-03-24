<template>
    <div class="cart-detail">
        <div class="cart-title"><h2 class="cart-header">GIỎ HÀNG CỦA BẠN</h2><span>{{GetCount}} MẶT HÀNG</span></div>
        <product v-for="(product, index) in GetProducts" :key="index" v-bind:product="product" v-bind:index="index"></product>
    </div>
</template>
<script>
import Product from './Product.vue'
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(["GetProducts", "GetCount"])
    },
    components:{
        Product
    }
}
</script>
<style scoped>
    .cart-title{
        padding: 12px 0;
        margin: 12px 0;
        font-size: 2.3rem;
        border-bottom: 1px solid gray;
    }
    .cart-header{
        display:inline-block;
        margin-right: 10px;
    }
</style>