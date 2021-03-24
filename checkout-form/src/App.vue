<template>
  <div class="app">
    <cart></cart>
  </div>
</template>

<script>
import Cart from './components/Cart/Cart.vue'
export default {
  components:{
    Cart
  }
}
</script>

<style>
  .app{
    max-width: 950px;
    margin: auto;
  }
</style>
