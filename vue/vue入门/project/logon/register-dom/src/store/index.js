import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //跨组件（两个组件之间无嵌套与父子关系）
    lists:[]
  },
  mutations: {
    addItem(state,value){
      state.lists.push(value);
    }
  },
  actions: {
  },
  modules: {
  }
})
