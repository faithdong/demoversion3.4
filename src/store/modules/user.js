/*
 * @Author: zhongxd
 * @Date: 2019-03-24 15:04:05
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-27 23:04:04
 *
 * vuex 状态管理 --- 用户 modules
 */

import axios from "axios";

const state = {
  user: {},
  status: ""
};

const getters = {
  isLogin: stat => stat.status
};

const actions = {
  Login(context, user) {
    //context.commit('login',user);
    axios
      .post("/user/login", user)
      .then(resp => {
        // eslint-disable-next-line
        console.log(resp);
        context.commit("login", resp);
        //const user = resp.data.user
        //context.commit('auth_success', user)
        //resolve(resp)
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err);
        //commit('auth_error')
        // reject(err)
      });
  }
};

const mutations = {
  login(state, user) {
    state.status = "success";
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
