import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Login from '@/components/Login'
import Myzone from '@/components/Myzone'
import Order from '@/components/Order'
import Business from '@/components/Business'
import Search from '@/components/Search'

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
      path:'/myzone',
      name:'Myzone',
      component:Myzone
    },
    {
      path:'/order',
      name:'Order',
      component:Order
    },
    {
      path:'/business/:id',
      name:'Business',
      component:Business
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      component: Search
    }
  ]
})
