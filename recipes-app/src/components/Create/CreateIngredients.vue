<template>
    <div class="ingredients">
        <h3 class="ingredients-header">Nguyên liệu</h3>
        <div class="input-group"
            v-for="(ingredient,i) in ingredients" v-bind:key="i">
            <input type="text" placeholder="250 gram bột" :value="ingredient" @input = "ChangeIngredient(i, $event)">
            <span class="input-delete" @click = "Delete(i)">X</span>
        </div>
        <div class="ingredients-add" @click = "add">+ Nguyên liệu</div>
    </div>
</template>
<script>
export default {
    props:{
        ingredients:Array,
        add:Function
    },
    methods:{
        ChangeIngredient(i, events){
            let info = {
                index : i,
                value : events.target.value
            }
            this.$emit('ingredient', info)
        },
        Delete(i){
            this.$emit('delete', i)
        },
    }
}
</script>
<style scoped>
    .ingredients{
        background-color:white;
        padding: 15px;
        margin: 8px 0;
    }

    .ingredients-header{
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

    .input-delete{
        cursor: pointer;
        padding: 10px;
        background-color: rgba(248,246,242,1);
    }

    .ingredients-add{
        margin-top: 20px;
        cursor: pointer;
        color:#4A4A4A;
        font-size:2rem;
        font-weight: bold;
        padding: 10px;
        text-align: center;
    }
</style>