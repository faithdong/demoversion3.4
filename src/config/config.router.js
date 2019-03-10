/*
 * @Author: zhongxd 
 * @Date: 2019-03-08 23:26:09 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-10 15:47:13
 * 
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../container/home/Home'
import Login from '../container/login/Login'
import Register from '../container/register/Register';

Vue.use(VueRouter);
const routes = [{
	path:'/',
	component:Home
},{
	path: '/login',
	component: Login
}, {
	path: '/register',
	component: Register
}];


const router = new VueRouter({
	routes
});

export default router;