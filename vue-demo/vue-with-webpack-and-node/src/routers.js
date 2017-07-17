import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Index = r => require.ensure([], () => r(require('./components/index')), 'index');
const Bar = r => require.ensure([], () => r(require('./components/bar')), 'bar');
const Foo = r => require.ensure([], () => r(require('./components/foo')), 'foo');
const Service = r => require.ensure([], () => r(require('./components/service')), 'service');
const Info = r => require.ensure([], () => r(require('./components/info')), 'info');
const NoFound = r => require.ensure([], () => r(require('./components/noFound')), 'noFound');

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