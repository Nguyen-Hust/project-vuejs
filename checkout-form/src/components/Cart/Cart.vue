<template>
    <div class="cart">
        <cart-detail></cart-detail>
    </div>
</template>
<script>
import CartDetail from './CartDetail.vue'
export default {
  components:{
      CartDetail
  }  
}
</script>
<style>
    .cart{
        display: grid;
        grid-template-columns: 66.67% 33.33%;
    }
</style>