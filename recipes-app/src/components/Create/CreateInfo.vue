<template>
    <div class="create-info">
        <input type="text" class="create-name" placeholder="Tên tác giả: Đạt" :value="food.author" @input="changeAuthor">
        <input type="text" class="create-name" placeholder="Tên món: Bánh bột mì" :value="food.foodName" @input="changeName">
        <div class="input-group">
            <label>Khẩu phần</label>
            <input type="text" placeholder="2 người" :value="food.servingFor" @input="changeServingFor">
        </div>
        <div class="input-group">
            <label >Thời gian nấu</label>
            <input type="text" placeholder="1 tiếng 30 phút" :value="food.time" @input="changeTime">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        food:Object,
    },
    methods:{
        changeName(events){
            this.$emit('name',events.target.value)
        },
        changeServingFor(events){
            this.$emit('servingFor',events.target.value)
        },
        changeTime(events){
            this.$emit('time',events.target.value)  
        },
        changeAuthor(events){
            this.$emit('author',events.target.value)
        }
    }   
}
</script>
<style scoped>
    .create-info{
        background-color:white;
        padding: 15px;
        margin: 8px 0;
    }
    .create-name{
        width: 100%;
        background-color: rgba(248,246,242,1);
        font-size:3.4rem;
        color:#4A4A4A;
        font-weight: bold;
        padding:8px;
        margin-bottom:16px
    }
    .create-name::placeholder{
        opacity: 0.5;
    }

    .input-group{
        display:flex;
        padding:10px 0;
        color: #767676;
        font-size: 1.6rem;
    }

    .input-group label{
        flex-basis: 50%;
        display: inline-block;
    }

    .input-group input{
        flex-grow:1;
        display: inline-block;
        background-color: rgba(248,246,242,1);
        padding: 10px;
    }
</style>