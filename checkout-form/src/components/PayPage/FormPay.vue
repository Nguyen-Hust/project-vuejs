<template lang="">
  <div class="d-flex">
    <form action="" method="">
      <label>
        <span class="fname">Tên <span class="required">*</span></span>
        <input type="text" v-model="user.firstName" required placeholder="Nhập tên của bạn" >
      </label>
      <label>
        <span class="lname">Họ <span class="required">*</span></span>
        <input type="text" v-model="user.lastName" required placeholder="Nhập họ của bạn">
      </label>
      <label>
        <span>Địa chỉ <span class="required">*</span></span>
        <input type="text" v-model="user.address" required placeholder="Nhập địa chỉ nhà bạn">
      </label>
      <label>
        <span>Phường <span class="required">*</span></span>
        <input type="text" v-model="user.ward" required  placeholder="Nhập phường của bạn">
      </label>
      <label>
        <span>Quận/ Huyện<span class="required">*</span></span>
        <input type="text" v-model="user.district" required placeholder="Nhập quận/ huyện của bạn">
      </label>
      <label>
        <span>Thành Phố <span class="required">*</span></span>
        <input type="text" v-model="user.city" required placeholder="Nhập thành phố của bạn" >
      </label>
      <label>
        <span>Postcode / ZIP <span class="required">*</span></span>
        <input type="text" v-model="user.postCode" required placeholder="Nhập mã zip">
      </label>
      <label>
        <span>Số điện thoại <span class="required">*</span></span>
        <input type="tel" v-model="user.phoneNumber" required placeholder="Nhập số điện của bạn">
      </label>
      <label>
        <span>Địa chỉ Email <span class="required">*</span></span>
        <input type="email" v-model="user.email" required placeholder="Nhập email của bạn">
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
      <button type="button" @click="Submit">Thanh toán</button>
      <p class="message">{{message}}</p>
    </div><!-- Yorder -->
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
      return {
        user:{
          firstName:this.$store.state.user.firstName,
          lastName:this.$store.state.user.lastName,
          address:this.$store.state.user.address,
          ward:this.$store.state.user.ward,
          district:this.$store.state.user.district,
          city:this.$store.state.user.city,
          postCode: this.$store.state.user.postCode,
          phoneNumber:this.$store.state.user.phoneNumber,
          email:this.$store.state.user.email
        },
        message:""
      }
    },
    computed:{
      ...mapGetters(["GetProductInfo","GetToTalProduct","GetToTal", "GetFilter"])
    },
    methods:{
      Submit(){
        for (const property in this.user) {
          if(this.user[property].trim() == ""){
            this.message = "Kiểm tra lại nội dung nhập"
            return
          }
        }
        if(!(/^-?[\d.]+(?:e-?\d+)?$/.test(this.user.phoneNumber))||this.user.phoneNumber.length != 10){
          this.message = "Kiểm tra lại số điện thoại nhập"
          return
        }
        if(!(/^-?[\d.]+(?:e-?\d+)?$/.test(this.user.postCode))||this.user.postCode.length != 7){
          this.message = "Kiểm tra lại postcode nhập"
          return
        }
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.user.email))){
          this.message = "Kiểm tra lại email nhập"
          return
        }
        this.$store.commit("UpdateUser", this.user)
        this.$router.push("/form/confirm")
      }
    }
}
</script>
<style scoped>
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
.required{
  color: red;
}
label, table{
  display: block;
  margin: 15px;
}
label>span{
  width: 25%;
  display:inline-block;
  margin-top: 12px;
  padding-right: 10px;
}
input[type="text"], input[type="tel"], input[type="email"]
{
  width: 70%;
  height: 30px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #dadada;
  color: #888;
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

.message{
  color:red;
  margin:0;
  text-align: center;
}
</style>