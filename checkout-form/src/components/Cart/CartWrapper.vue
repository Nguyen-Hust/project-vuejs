<template>
    <div class="cart-wrapper">
        <div class="cart-summary">
            <router-link to="/form" href="" class="summary-button">Thanh Toán</router-link> 
            <h2 class="summary-title">TÓM TẮT ĐƠN HÀNG:</h2>
            <div class="summary-box">
                <div class="summary-text">2 CÁC SẢN PHẨM</div>
                <hr>
                <div class="summary-text">
                    <div class="text-left">Tổng sản phẩm</div>
                    <div class="text-right">₫{{GetToTalProduct}}</div>
                </div>
                <hr>
                <div class="summary-text">
                    <div class="text-left">Giao hàng</div>
                    <div class="text-right">MIỄN PHÍ</div>
                </div>
                <hr>
                <div class="summary-text summary-total">
                    <div class="text-left">Tổng</div>
                    <div class="text-right">₫{{GetToTal}}</div>
                </div>
            </div>
        </div>
        <div class="wrapper-promotion">
            <div @click="isShow = !isShow" class="promotion-title">Mã khuyến mãi</div>
            
            <transition name="fade">
                <div class="hidden" v-if="isShow">
                    <input type="text" v-model="inputPromotion" placeholder="Nhập mã khuyễn mãi của bạn" class="promotion-text">
                    <button class="promotion-button" @click="Check">Áp dụng</button> 
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            isShow: false,
            inputPromotion: "",
            promotion: 'dat'
        }
    },
    computed:{
        ...mapGetters(["GetToTal", "GetToTalProduct"])
    },
    methods:{
        Check(){
            if(this.promotion == this.inputPromotion){
                this.$store.commit("UpdatePromotion", true)
            }
            else{
                this.$store.commit("UpdatePromotion", false)
            }
        }
    }
}
</script>
<style  scoped>
    .fade-enter{
        height: 0;
    }

    .fade-enter-active{
        transition: height 1s;
    }

    .fade-leave-active{
       transition: height 1s;
       height: 0;  
    }

    .cart-wrapper{
        padding: 12px 0;
        margin: 12px 0;
    }

    .cart-summary, .wrapper-promotion{
        background-color: #ebebeb;
        padding: 10px;
    }

    .summary-button{
        background-color: black;
        display:inline-block;
        color: white;
        width: 100%;
        padding: 15px;
        font-size: 1.8rem;
        text-decoration: none;
        font-weight: bold;
    }
    
    .summary-title{
        margin: 12px 0;
        font-size: 1.8rem
    }

    .summary-box{
        padding: 8px 10px;
        background-color: white;
        font-size: 1.5rem
    }

    .summary-text{
        display:flex;
        padding: 8px 0;
        justify-content: space-between;
    }

    .summary-total{
        padding-top: 20px;
        font-weight:bold;
        font-size: 1.8rem;
    }

    .wrapper-promotion{
        margin-top: 20px;
    }

    .promotion-title{
        cursor: pointer;
        background-color:white;
        padding: 15px;
        font-size: 1.8rem;
        font-weight: bold;
    }
    .hidden{
        background-color:white;
        overflow:hidden
    }
    .promotion-text{
        padding: 10px;
        width:100%;
        border: 1px solid black;
        font-size: 1.4rem;
    }

    .promotion-button{
        cursor: pointer;
        margin-top: 15px;
        background-color: black;
        color: white;
        width: 100%;
        padding: 15px;
        font-size: 1.8rem;
        text-align:left
    }

    .promotion-button:hover{
        background-color: gray;
    }
</style>