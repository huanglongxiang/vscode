import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from './server/http'

Vue.config.productionTip = false
//把http挂载到全局中
Vue.prototype.$Http = Http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
