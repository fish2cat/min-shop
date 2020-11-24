import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Category from '../components/Category.vue'
import Shopcard from '../components/Shopcard.vue'
import User from '../components/User.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/category', component: Category },
  { path: '/shopcard', component: Shopcard },
  { path: '/user', component: User }
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'router-link-active'
})

export default router
