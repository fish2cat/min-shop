import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
