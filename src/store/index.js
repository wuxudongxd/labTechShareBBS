import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    token:localStorage.getItem('token') ? localStorage.getItem('token'):'',
  },
  mutations: {
    setToken(state, value) { // 设置存储token
      state.token = value;
      localStorage.setItem('token', value);
    },
  },
  actions: {
  },
  modules: {
  }
})
