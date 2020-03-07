import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'
import './directive/index'
import './mock/mock'
// 引入echarts
import echarts from 'echarts'
//一般都要加个$加到vue的原型链上，方便引用

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios 

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
