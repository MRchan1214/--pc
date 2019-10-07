import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导包ElementUI包
import ElementUI from 'element-ui'
// 导入ElementUI css样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 设置当前项目模式:为非生产模式
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
