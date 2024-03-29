import Vue from 'vue'
import App from './App.vue'
import '@/assets/font/iconfont.css'
import '@/assets/style/global.scss'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
