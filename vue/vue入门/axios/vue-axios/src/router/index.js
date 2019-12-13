import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/2-2',
    name: '2-2',
    component: () => import('../views/2-2各种请求方式实现.vue')
  },
  {
    path: '/2-3',
    name: '2-3',
    component: () => import('../views/2-3并发实现.vue')
  },
  {
    path: '/ListDemo',
    name: 'ListDemo',
    component: () => import('../views/ListDemo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
