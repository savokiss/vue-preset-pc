import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/views/NotFound'
import Home from './views/Home.vue'
import Login from './views/auth/Login.vue'

import authUtils from '@/services/auth/utils'

Vue.use(Router)

// 验证登录
function requireAuth (to, from, next) {
  if (!authUtils.loggedIn()) {
    next({
      path: '/auth/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/auth/login',
      name: 'auth.login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
