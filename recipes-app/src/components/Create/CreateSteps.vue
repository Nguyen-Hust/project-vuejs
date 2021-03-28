<template>
    <div class="steps">
        <h3 class="steps-header">Các bước</h3>
        <div class="input-group"
            v-for="(step,i) in steps" v-bind:key="i">
            <label class="input">Bước {{i+1}}:</label>
            <input type="text" placeholder="Trộn bột và nước  đến khi đặc lại"
                :value="step" @input = "ChangeSteps(i, $event)">
            <span class="input-delete" @click = "Delete(i)">X</span>
        </div>
        <div class="steps-add"  @click = "add">+ Bước làm</div>
    </div>
</template>
<script>
export default {
    props:{
        steps:Array,
        add:Function
    },
    methods:{
        ChangeSteps(i, events){
            let info = {
                index : i,
                value : events.target.value
            }
            this.$emit('steps', info)
        },
        Delete(i){
            this.$emit('delete', i)
        },
    }
}
</script>
<style>
    .steps{
        background-color:white;
        padding: 15px;
        margin: 8px 0;
    }

    .steps-header{
        font-size: 2.5rem;
        margin-bottom: 8px;
    }

    .input-group{
        display:flex;
        padding:10px 0;
        color: #767676;
        font-size: 1.6rem;
    }

    .input-group input{
        flex-grow:1;
        display: inline-block;
        background-color: rgba(248,246,242,1);
        padding: 10px;
    }

    .input-group label{
        padding: 10px;
    }

    .input-delete{
        cursor: pointer;
        padding: 10px;
        background-color: rgba(248,246,242,1);
    }

    .steps-add{
        margin-top: 20px;
        cursor: pointer;
        color:#4A4A4A;
        font-size:2rem;
        font-weight: bold;
        padding: 10px;
        text-align: center;
    }
</style>