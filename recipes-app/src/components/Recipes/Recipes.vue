<template>
    <div class="recipe">
       <h3 class="recipe-name">{{GetRecipe.foodInfo.foodName}}</h3>
       <p class="recipe-author">của {{GetRecipe.foodInfo.author}}</p>
       <hr>
       <p class="recipe-time">Thời gian hoàn thành: {{GetRecipe.foodInfo.time}}</p>
       <hr>
       <div class="ingredients">
            <h3 class="ingredients-header">Nguyên liệu</h3>
            <p class="amount">Cho {{GetRecipe.foodInfo.servingFor}}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item item" v-for="ingredient in GetRecipe.ingredients" v-bind:key="ingredient">{{ingredient}}</li>
            </ul>
       </div>
        <hr>
        <ul class="list-step">
            <h3 class="step-header">Các bước</h3>
            <li v-for="(step, i) in GetRecipe.steps" v-bind:key="i" class="step-group">
                <span class="step-number">{{i+1}}</span>
                <div class="step">{{step}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed:{
        GetRecipe(){
            return this.$store.state.recipes[this.$route.params.id]
        }
    }
}
</script>
<style scoped>
    .recipe{
        position: relative;
        background-color: white;
        top: 70px;
    }
    .recipe-name{
        font-size: 3.4rem;
        margin-bottom: 4px;
        padding:0 1.6rem;
    }
    .recipe-author{
        font-size: 1.6rem;
        padding:0 1.6rem;
        margin: 8px 0;
    }
    .recipe-time{
        text-align: center;
        font-size:1.6rem;
    }
    .ingredients{
        padding:1.6rem;
    }

    .ingredients-header{
        font-size:2.4rem;
    }

    .amount{
        font-size: 1.6rem;
    }

    .ingredients .item{
        font-size:1.8rem;
        font-weight: bold;
    }

    .list-step{
        padding:1.6rem;
    }

    .step-header{
        font-size:2.4rem;
        margin-bottom:15px;
    }
    .step-group{
        display:flex;
        font-size: 1.8rem;
        margin-bottom: 24px;
    }

    .step-number{
        padding: 5px 13px;
        border-radius: 50%;
        background-color:#4A4A4A;
        color: white;
        margin-right: 8px;
    }

    .step{
        padding: 5px;
    }
</style>