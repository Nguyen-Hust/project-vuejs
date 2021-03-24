<template>
    <div class="cart">
        <cart-detail></cart-detail>
        <cart-wrapper></cart-wrapper>
    </div>
</template>
<script>
import CartDetail from './CartDetail.vue'
import CartWrapper from './CartWrapper.vue'
export default {
  components:{
      CartDetail,
      CartWrapper
  }
}
</script>
<style scoped>
    .cart{
        display: grid;
        grid-template-columns: 70% 30%;
        grid-column-gap: 10px;
    }
</style>