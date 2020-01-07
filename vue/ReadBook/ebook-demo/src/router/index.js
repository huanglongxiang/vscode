import Vue from 'vue'
import VueRouter from 'vue-router'
import Ebook from '@/Ebook'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //重定向组件位置
    redirect:'/ebook'
  },
  {
    path:'/ebook',
    component:Ebook,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
