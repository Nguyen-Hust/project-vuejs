<template lang="">
    <div class="container">
  <div class="title">
    <h2 class="title-active">(1) Địa chỉ giao hàng</h2>
    <h2 class="title-disabled">(2) Xem lại & thanh toán</h2>
  </div>
  <div class="d-flex">
    <form action="" method="">
      <label>
        <span class="fname">Tên <span class="required">*</span></span>
        <input type="text" placeholder="Nhập tên của bạn" >
      </label>
      <label>
        <span class="lname">Họ <span class="required">*</span></span>
        <input type="text" placeholder="Nhập họ của bạn">
      </label>
      <label>
        <span>Địa chỉ <span class="required">*</span></span>
        <input type="text" placeholder="Nhập địa chỉ nhà bạn" required>
      </label>
      <label>
        <span>Phường <span class="required">*</span></span>
        <input type="text"  placeholder="Nhập phường của bạn">
      </label>
      <label>
        <span>Quận/ Huyện<span class="required">*</span></span>
        <input type="text" placeholder="Nhập quận/ huyện của bạn" required>
      </label>
      <label>
        <span>Thành Phố <span class="required">*</span></span>
        <input type="text" placeholder="Nhập thành phố của bạn" required>
      </label>
      <label>
        <span>Postcode / ZIP <span class="required">*</span></span>
        <input type="text" placeholder="Nhập mã zip">
      </label>
      <label>
        <span>Số điện thoại <span class="required">*</span></span>
        <input type="tel" placeholder="Nhập số điện của bạn">
      </label>
      <label>
        <span>Địa chỉ Email <span class="required">*</span></span>
        <input type="email" placeholder="Nhập email của bạn">
      </label>
    </form>
    <div class="Yorder">
      <table>
        <tr>
          <th colspan="2">Đơn hàng của bạn</th>
        </tr>
        <tr v-for="product in GetProductInfo">
          <td>{{product.name}} x {{product.amount}}</td>
          <td>₫{{product.price}}</td>
        </tr>
        <tr>
          <td>Tổng sản phẩm</td>
          <td>₫{{GetToTalProduct}}</td>
        </tr>
        <tr>
          <td>Phí ship</td>
          <td>Miễn phí</td>
        </tr>
        <tr v-if="GetFilter">
          <td>Mã khuyễn mãi</td>
          <td>25%</td>
        </tr>
        <tr>
          <td>Tổng tiền</td>
          <td>₫{{GetToTal}}</td>
        </tr>
        
      </table><br>
      <button type="button">Place Order</button>
    </div><!-- Yorder -->
  </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(["GetProductInfo","GetToTalProduct","GetToTal", "GetFilter"])
    }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700');

.container{
  font-size: 16px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1200px)
{
  .container{
    max-width: 1140px;
  }
}
.d-flex{
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  border-radius: 0 0 5px 5px;
  padding: 25px;
}
form{
  flex: 4;
}
.Yorder{
  flex: 2;
}
.title{
  display: flex;
  border-radius:5px 5px 0 0 ;
}
.title-active{
  cursor: pointer;
  padding: 20px;
  border-bottom: 1px solid black;
}
.title-disabled{
  color: #D9D9D9;
  padding: 20px;
}
h2{
  margin: 0;
  padding-left: 15px; 
}
.required{
  color: red;
}
label, table{
  display: block;
  margin: 15px;
}
label>span{
  float: left;
  width: 25%;
  margin-top: 12px;
  padding-right: 10px;
}
input[type="text"], input[type="tel"], input[type="email"], select
{
  width: 70%;
  height: 30px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #dadada;
  color: #888;
}
select{
  width: 72%;
  height: 45px;
  padding: 5px 10px;
  margin-bottom: 10px;
}
.Yorder{
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #dadada;
}
table{
  margin: 0;
  padding: 0;
}
th{
  border-bottom: 1px solid #dadada;
  padding: 10px 0;
}
tr>td:nth-child(1){
  text-align: left;
  color: #2d2d2a;
}
tr>td:nth-child(2){
  text-align: right;
  color: #52ad9c;
}
td{
  border-bottom: 1px solid #dadada;
  padding: 25px 25px 25px 0;
}

.Yorder>div{
  padding: 15px 0; 
}

button{
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background: #52ad9c;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
}
button:hover{
  cursor: pointer;
  background: #428a7d;
}
</style>