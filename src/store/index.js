/*
 * @Author: zhongxd 
 * @Date: 2019-03-24 15:46:27 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-24 15:51:42
 * 
 * 
 */

import Vue from 'vue';
import Vuex from 'vuex';


import user from './modules/user'
//import cart from './modules/cart'
//import products from './modules/products'


Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		user,
		//cart,
		//products
	},
});

export default store;