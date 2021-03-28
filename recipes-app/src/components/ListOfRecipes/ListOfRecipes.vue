<template>
    <div class="list">
        <h2 class="list-header">Danh sách công thức</h2>
        <ul class="list-group">
            <li v-for="(recipe, i) in List" v-bind:key="i"
                class="list-group-item item"
                @click="$router.push(`/recipe/${i}`)">
                <div class="recipes-name">Tên món: {{recipe.foodInfo.foodName}}</div>
                <div class="recipes-author">Tác giả: {{recipe.foodInfo.author}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed:{
        List(){
            return this.$store.state.recipes;
        }
    }
}
</script>
<style>
    .list-header{
        text-align:center;
        font-size: 4rem;
        margin-bottom: 20px;
    }
    .list{
        position: relative;
        top: 70px;
    }
    .item{
        font-size:2rem;
        display:flex;
        justify-content: space-between;
        cursor: pointer;
    }
</style>