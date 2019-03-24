/*
 * @Author: zhongxd 
 * @Date: 2019-03-11 14:24:01 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-21 22:28:22
 */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);


//https://segmentfault.com/a/1190000015782272
//https://www.jianshu.com/p/a804606ad8e9

//https://www.cnblogs.com/zdd2017/p/9871925.html

axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/api/'  // api 即上面 vue.config.js 中配置的地址


const state = { //要设置的全局访问的state对象
  user: {},
  status: '',
};


const getters = { //实时监听state值的变化(最新状态)
  authStatus: state => state.status
}

const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, user) {
    state.status = 'success';
    state.user = user;
  },
  auth_error(state) {
    state.status = 'error';
  },
  logout(state) {
    state.status = '';
    state.token = '';
  },
}

const actions = {
  Login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
      axios.post('/api/user/login', user)
        .then(resp => {
          const user = resp.data.user
          commit('auth_success', user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          reject(err)
        })
    })
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;