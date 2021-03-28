<template>
    <div class="create">
        <h2 class="create-header">Thêm công thức</h2>
        <create-name 
            v-bind:food="recipe.foodInfo"
            @name="recipe.foodInfo.foodName = $event"
            @servingFor="recipe.foodInfo.servingFor = $event"
            @time="recipe.foodInfo.time = $event"
            @author="recipe.foodInfo.author = $event"
            ></create-name>
        <create-ingredients
            v-bind:ingredients="recipe.ingredients"
            @ingredient = "ChangeIngredient($event)" :add="AddIngredients"
            @delete="recipe.ingredients.splice($event, 1)"></create-ingredients>
        <create-steps
            v-bind:steps="recipe.steps"
            @steps = "ChangeSteps($event)" :add="AddSteps"
            @delete="recipe.steps.splice($event, 1)"
        ></create-steps>
        <button class="create-complete" @click="Complete">Hoàn thành</button>
    </div>
</template>
<script>
import CreateName from './CreateInfo'
import CreateSteps from './CreateSteps'
import CreateIngredients from './CreateIngredients'
export default {
    data() {
        return {
            recipe:{
                foodInfo:{
                    author:"",
                    foodName:"",
                    servingFor:"",
                    time:"",
                },
                ingredients:[
                    "",""
                ],
                steps:[
                    "", ""
                ]
            }
        }
    },
    methods:{
        ChangeIngredient(info){
            this.recipe.ingredients[info.index] = info.value
        },
        AddIngredients(){
            this.recipe.ingredients.push("");
        },
        ChangeSteps(info){
            this.recipe.steps[info.index] = info.value
        },
        AddSteps(){
            this.recipe.steps.push("");
        },
        Complete(){
            this.$store.commit('updateFood', this.recipe)
            this.$router.push("/");
        }
    },
    components:{
        CreateName, 
        CreateIngredients,
        CreateSteps
    }
}
</script>
<style>
    .create{
        position: relative;
        top: 70px;
    }
    .create-header{
        text-align: center;
        font-size: 4rem;
        color: #4A4A4A
    }
    .create-complete{
        cursor: pointer;
        display: block;
        margin: 15px auto;
        font-size: 3rem;
        border-radius: 50px;
        padding: 10px 30px;
        color: white;
        background-color: rgba(255,153,51,1);
    }

    .create-complete:hover{
         background-color: rgba(255,153,51,0.7);
    }
</style>