import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Category from '../pages/Category.vue'
import Shopcard from '../pages/Shopcard.vue'
import User from '../pages/User.vue'
import Login from '../pages/user/Login.vue'
import Regist from '../pages/user/Regist.vue'
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, meta: { title: '首页' } },
  { path: '/category', component: Category, meta: { title: '分类' } },
  { path: '/shopcard', component: Shopcard, meta: { title: '购物车' } },
  { path: '/user', component: User, meta: { title: '我的' } },
  { path: '/user/login', component: Login, meta: { title: '登录' } },
  { path: '/user/regist', component: Regist, meta: { title: '注册' } }
]
const router = new VueRouter({
  routes,
  // linkActiveClass: 'router-link-active'
  linkActiveClass: 'mui-active'
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
