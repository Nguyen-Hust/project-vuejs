<template>
    <div class="product">
        <div class="product-image">
            <img :src="Link" alt="YEEZY-BOOST-380-ADULTS">
        </div>
        <div class="product-info">
            <h3 class="product-name">{{product.name}}</h3>{{this.product.amount}}
            <p v-if="product.gender == 1" class="product-gender">Giới tính: Nam</p>
            <p v-else-if="product.gender == 0" class="product-gender">Giới tính: Nữ</p>
            <p class="product-color">Màu: {{product.color}} </p>
            <p v-for="(size,type) in product.sizes" :key="type" class="product-size">Size: {{size}} {{type}}</p>
            <p v-if="product.pairsOfShoesLeft > 5" class="product-available">Có Sẵn Trong Cửa Hàng</p>
            <p v-else  class="product-available">Chỉ còn lại {{product.pairsOfShoesLeft}} trong kho hàng</p>
        </div>
        <div class="product-filter">
            <div class="product-amount">
                <label class="select" for="slct">
                    <select v-model="Amount" id="slct" required="required">
                        <option v-for="n in product.pairsOfShoesLeft" :key="n" v-bind:value="n">{{n}}</option>
                    </select>
                    <svg>
                        <use xlink:href="#select-arrow-down"></use>
                    </svg>
                </label>
                <!-- SVG Sprites-->
                <svg class="sprites">
                    <symbol id="select-arrow-down" viewbox="0 0 10 6">
                        <polyline points="1 1 5 5 9 1"></polyline>
                    </symbol>
                </svg>
            </div>
            <p class="product-price">
                ₫{{this.product.price}}
            </p>
        </div>
        <button class="product-delete" @click="Delete">X</button>
    </div>
</template>
<script>
export default {
    props: {
        product:{
            type:Object,
            required: true
        },
        index:{
            type:Number,
            required: true
        }
    },
    computed: {
        Link(){
            let link = this.product.name.split(" ").join("-")
            return `/dist/${link}.jpg`
        },
        Amount: {
            get(){
                return this.$store.state.Products[this.index].amount
            }, 
            set(count){
                this.$store.commit("UpdateCount", [this.index, count])
            }
        }
    },
    methods:{
        Delete(){
            this.$store.commit("DeleteProduct", this.index)
        }
    }
}
</script>
<style>
    .product{
        position: relative;
        display: grid;
        grid-template-columns: 20% 55% 25%;
        padding: 1.6rem;
        font-size: 1.4rem;
        grid-column-gap: 10px;
    }
    .product-name{
        font-size: 1.6rem;
        padding-bottom:10px
    }
    .product-available{
        font-weight: bold;
    }
    .product-price{
        padding: 10px;
        font-size: 1.6rem;
        font-weight: bold;
    }
    .product-amount{
        display: flex;
    }
    .select {
        position: relative;
        max-width: 70px;
    }
    .select svg {
        position: absolute;
        right: 12px;
        top: calc(50% - 3px);
        width: 10px;
        height: 6px;
        stroke-width: 2px;
        stroke: #9098a9;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
    }
    .select select {
        -webkit-appearance: none;
        padding: 7px 40px 7px 12px;
        width: 100%;
        border: 1px solid #e8eaed;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 1px 3px -2px #9098a9;
        cursor: pointer;
        font-family: inherit;
        font-size: 16px;
        transition: all 150ms ease;
    }
    .select select:required:invalid {
        color: #5a667f;
    }
    .select select option {
        color: #223254;
    }
    .select select option[value=""][disabled] {
        display: none;
    }
    .select select:focus {
        outline: none;
        border-color: #07f;
        box-shadow: 0 0 0 2px rgba(0,119,255,0.2);
    }
    .select select:hover + svg {
        stroke: #07f;
    }
    .sprites {
        position: absolute;
        width: 0;
        height: 0;
        pointer-events: none;
        user-select: none;
    }
    .product-delete{
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 5px 8px;
        border-radius: 50%;
    }

    .product-delete:hover{
        background:gray;
        color: white;;
    }
</style>