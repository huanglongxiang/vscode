import Vue from 'vue'
import TodoList from './TodoList'

Vue.config.productionTip = false

new Vue({
  render: h => h(TodoList),
}).$mount('#TodoList')
