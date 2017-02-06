import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/index';
import Foo from './components/foo';
import Bar from './components/bar';
import Service from './components/service';
import Info from './components/info';
import NoFound from './components/noFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index,
    redirect: {
      name: 'bar'
    },
    children: [{
      path: 'bar',
      component: Bar,
      name: 'bar'
    }, {
      path: 'foo',
      component: Foo,
      redirect: {
        name: 'service'
      },
      children: [{
        path: 'service',
        component: Service,
        name: 'service'
      }, {
        path: 'info',
        component: Info
      }]
    }]
  }, {
    path: '*',
    component: NoFound
  }]
});