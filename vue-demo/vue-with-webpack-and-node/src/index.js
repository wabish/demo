import Promise from 'promise-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Bar from './components/bar';
import Foo from './components/foo';

import './style/index';

if (!window.Promise) {
  window.Promise = Promise;
}

Vue.use(VueRouter);

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  router
}).$mount('#app');