import Vue from 'vue';
import VueRouter from 'vue-router';

import Button from './pages/button';
import Icon from './pages/icon';

Vue.use(VueRouter);

const routes = [{
  path: '/button',
  component: Button
}, {
  path: '/icon',
  component: Icon
}];

const router = new VueRouter({
  routes 
});

export default router;