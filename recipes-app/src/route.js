import Create from './components/Create/Create.vue'
import ListOfRecipes from './components/ListOfRecipes/ListOfRecipes.vue'
import Recipes from './components/Recipes/Recipes.vue'

export const routes = [
    {path: "/", name: "List", component:ListOfRecipes},
    {path: "/create", name: "create", component:Create},
    {path: "/recipe/:id", name: "recipe", component:Recipes},
]