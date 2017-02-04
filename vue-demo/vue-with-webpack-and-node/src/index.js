import Vue from 'vue';
import VueRouter from 'vue-router';
import Bar from './components/bar';
import Foo from './components/foo';

import './style/index';

Vue.use(VueRouter);

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  // 使用 php 时开启
  mode: 'history',
  routes
});

const app = new Vue({
  router
}).$mount('#app');