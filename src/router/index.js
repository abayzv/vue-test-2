import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/auth/Login.vue'
import RegisterVue from '@/views/auth/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta : {needAuth : true}
  },
  {
    path: '/signin',
    name: 'signin',
    component: LoginVue
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterVue
  },
  {
    path: '/about',
    name: 'about',
    meta : {needAuth : true},
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.needAuth)){
    let isAuth = store.getters.isAuth
    if(!isAuth){
      next({name : 'signin'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
