<template>
    <div class="container">
        <div class="title">
            <router-link
                active-class="title-active"
                exact
                class="title-disabled"
                tag="h2"
                to="/form"
                >(1) Địa chỉ giao hàng</router-link>
            <router-link
                class="title-disabled inactiveLink"
                active-class="title-active"
                tag="h2"
                to="/form/confirm"
                >(2) Xem lại & thanh toán</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.container {
  font-size: 16px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
.title {
  display: flex;
  border-radius: 5px 5px 0 0;
}
.title-disabled {
  cursor: pointer;
  color: #d9d9d9;
  padding: 20px;
}
.inactiveLink {
   pointer-events: none;
   cursor:default;
}
.title-active {
  color:black;
  padding: 20px;
  border-bottom: 1px solid black;
}
</style>