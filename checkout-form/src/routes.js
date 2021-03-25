import Cart from './components/Cart/Cart.vue'
import CheckOutForm from './components/PayPage/CheckOutForm.vue'
import FormPay from './components/PayPage/FormPay.vue'
import ConfirmPay from './components/PayPage/ConfirmPay.vue'

export const routes = [
    {path:"/", name:"cart", component:Cart},
    {path:"/form", component:CheckOutForm, children:[
        { path:"", name:"form", component:FormPay },
        { path:"confirm", name:"confirm", component:ConfirmPay }
    ]}
]