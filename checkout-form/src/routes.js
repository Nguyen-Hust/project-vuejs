import Cart from './components/Cart/Cart.vue'
import FormPay from './components/PayPage/FormPay.vue'

export const routes = [
    {path:"/", name:"cart", component:Cart},
    {path:"/form", name:"form", component:FormPay}
]