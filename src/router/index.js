import Vue from 'vue';
import Router from 'vue-router';
import common from 'pages/common';
import login from 'pages/login/login';
import home from 'pages/home/home';
import land from 'pages/land/land';

Vue.use(Router);

const routes = [
  {path: '/', redirect: '/index/home'},
  {path: '/index', component: common,redirect:'/index/home',
    children: [
      {path:'home', component :home,},
      {path:'land',component:land},
        ]
      },
  {path: '/login', component: login}
];

export default new Router({
    /*linkActiveClass: 'active',*/
    routes
});
