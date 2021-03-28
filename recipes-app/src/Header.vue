<template>
    <header class="header">
        <router-link
            tag="a"
            class="logo" 
            to="/"
            >Recipes App</router-link>
        <router-link
            tag="a"
            class="header-link"
            to="/create"
        >Thêm công thức&nbsp;<span class="link-icon">+</span></router-link>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        z-index:100;
        width:100vw;
        display: flex;
        padding: 20px;
        justify-content: space-between;
        background-color: white;
        position: fixed;
        top: 0;
        right: 0;
        border-bottom: .5px solid gray;
        box-shadow: 0 2px 0 0 rgba(0,0,0,0.2)
    }
    a:hover{
        text-decoration: none;
    }
    .logo{
        font-size: 2rem;
        padding: 0 15px;
        font-weight: bold;
    }
    .header-link{
        font-size:  1.8rem;
        color: gray;
    }
    .link-icon{
        border: 1px solid lightgrey;
        padding: 0 5px;
        border-radius: 6px;
    }
</style>