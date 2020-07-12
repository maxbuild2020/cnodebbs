import Vue from 'vue'
import VueRouter from 'vue-router'

const homeList = ()=> import('@/home/homelist')
const mainList = ()=> import('@/home/components/mainlist')
const getsStart = ()=> import('@/home/getstart')
const register = ()=> import('@/home/register')
const login = ()=> import('@/home/login')
const postView = ()=> import('@/home/components/postview')


Vue.use(VueRouter)

const routes = [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      component: homeList,
      // beforeEnter: (to, from, next) => {
      //   if(sessionStorage.userToken){
      //     next()
      //   }else {
      //     next({
      //       path: '/login'
      //     })
      //   }
      // },
      children: [{
        path: '',
        component: mainList
      }]
    },{
      path: '/postview/:id',
      component: postView
    },{
      path: '/getstart',
      component: getsStart
    },{
      path: '/register',
      component: register
    },{
      path: '/login',
      component: login
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

