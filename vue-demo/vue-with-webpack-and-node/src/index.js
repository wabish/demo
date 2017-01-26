import Vue from 'vue';
import VueRouter from 'vue-router';
import Bar from './components/bar';
import Foo from './components/foo';

Vue.use(VueRouter);

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');