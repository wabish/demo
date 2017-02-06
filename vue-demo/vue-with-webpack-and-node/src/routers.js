import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/index';
import Foo from './components/foo';
import Bar from './components/bar';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '/foo',
      component: Foo
    }, {
      path: '/bar',
      component: Bar
    }]
  }]
});