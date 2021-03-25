<template lang="">
  <div class="d-flex">
    <form action="" method="">
      <label>
        <span>Tên:</span>
        <p class="user-info">{{ GetUser.firstName }}</p>
      </label>
      <label>
        <span>Họ:</span>
        <p class="user-info">{{ GetUser.lastName }}</p>
      </label>
      <label>
        <span>Địa chỉ:</span>
        <p class="user-info">{{ GetUser.address }}</p>
      </label>
      <label>
        <span>Phường:</span>
        <p class="user-info">{{ GetUser.ward }}</p>
      </label>
      <label>
        <span>Quận/ Huyện:</span>
        <p class="user-info">{{ GetUser.district }}</p>
      </label>
      <label>
        <span>Thành Phố:</span>
        <p class="user-info">{{ GetUser.city }}</p>
      </label>
      <label>
        <span>Postcode / ZIP:</span>
        <p class="user-info">{{ GetUser.postCode }}</p>
      </label>
      <label>
        <span>Số điện thoại:</span>
        <p class="user-info">{{ GetUser.phoneNumber }}</p>
      </label>
      <label>
        <span>Địa chỉ Email:</span>
        <p class="user-info">{{ GetUser.email }}</p>
      </label>
    </form>
    <div class="Yorder">
      <table>
        <tr>
          <th colspan="2">Đơn hàng của bạn</th>
        </tr>
        <tr v-for="product in GetProductInfo">
          <td>{{ product.name }} x {{ product.amount }}</td>
          <td>₫{{ product.price }}</td>
        </tr>
        <tr>
          <td>Tổng sản phẩm</td>
          <td>₫{{ GetToTalProduct }}</td>
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
          <td>₫{{ GetToTal }}</td>
        </tr>
      </table>

      <br />
      <label
        >
        <input type="radio" checked="checked" name="methodPay" />Trả tiền khi nhận hàng
        <span class="checkmark"></span>
      </label>
      <label
        >
        <input type="radio" name="methodPay" />Thanh toán trực tuyến
        <span class="checkmark"></span>
      </label>
      <button type="button" onclick="Swal.fire('Bạn đã đặt hàng thành công')">Xác nhận đơn hàng</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "GetProductInfo",
      "GetToTalProduct",
      "GetToTal",
      "GetFilter",
      "GetUser"
    ])
  }
};
</script>
<style scoped>
.d-flex {
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  border-radius: 0 0 5px 5px;
  padding: 25px;
}
form {
  flex: 4;
}
.Yorder {
  flex: 2;
}
.required {
  color: red;
}
label,
table {
  display: block;
  margin: 15px;
}
label > span {
  width: 20%;
  display: inline-block;
}
.user-info {
  display: inline-block;
  width: 70%;
  height: 30px;
  margin-bottom: 0;
  color: #888;
}
.Yorder {
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #dadada;
}
table {
  margin: 0;
  padding: 0;
}
th {
  border-bottom: 1px solid #dadada;
  padding: 10px 0;
}
tr > td:nth-child(1) {
  text-align: left;
  color: #2d2d2a;
}
tr > td:nth-child(2) {
  text-align: right;
  color: #52ad9c;
}
td {
  border-bottom: 1px solid #dadada;
  padding: 25px 25px 25px 0;
}

.Yorder > div {
  padding: 15px 0;
}

button {
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
button:hover {
  cursor: pointer;
  background: #428a7d;
}

.message {
  color: red;
  margin: 0;
  text-align: center;
}
</style>
