import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Auth from './auth.js'
import axios from 'axios'
import { Header, Button, Swipe, SwipeItem, Indicator, Toast, Field } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Field.name, Field)
Vue.prototype.$auth = Auth
Vue.prototype.$Indicator = Indicator
Vue.prototype.$Toast = Toast
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://tpadmin.test/api'

axios.interceptors.request.use(config => {
  // Bearer令牌格式
  config.headers.Authorization = `Bearer ${Auth.getAuthorization()}`
  // config.headers.Authorization = Auth.getAuthorization()
  return config
})

Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
