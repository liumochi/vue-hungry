import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Login from '@/components/Login'
import Myzone from '@/components/Myzone'
import Order from '@/components/Order'
import Business from '@/components/Business'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/Myzone',
      name:'Myzone',
      component:Myzone
    },
    {
      path:'/Order',
      name:'Order',
      component:Order
    }
  ]
})
