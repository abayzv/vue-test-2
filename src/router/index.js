import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/auth/Login.vue'
import RegisterVue from '@/views/auth/Register.vue'
import AboutViewVue from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component : HomeView,
    meta : {needAuth : true, title: 'Home'}
  },
  {
    path: '/signin',
    name: 'signin',
    component: LoginVue,
    meta : {title: 'Login'}
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterVue,
    meta : {title: 'Register'}
  },
  {
    path: '/about',
    name: 'about',
    component : AboutViewVue,
    meta : {needAuth : TrustedHTML, title: 'About'},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Bayu`
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
