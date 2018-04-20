import Vue from 'vue';
import Router from 'vue-router';
//懒加载  首页加载速度
Vue.use(Router);

const routes = new Router({
	routes: [{
			path: '/',
			redirect: '/index/home'
		},
		{
			path: '/index',
			component: resolve => require(["../pages/common"], resolve),
			children: [{
					path: 'home',
					component: resolve => require(["../pages/home/home"], resolve),
				},
				{
					path: 'land',
					component: resolve => require(["../pages/land/land"], resolve)
				},
			]
		},
		{
			path: '/login',
			component: resolve => require(["../pages/login/login"], resolve)
		}
	]
})
export default routes