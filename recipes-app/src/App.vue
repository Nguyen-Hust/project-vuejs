<template>
  <div id="app">
    <header-app></header-app>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderApp from './Header.vue'
export default {
  components:{
    HeaderApp
  }
}
</script>

<style scoped>
  #app{
    max-width: 680px;
    margin: auto;
  }
</style>
