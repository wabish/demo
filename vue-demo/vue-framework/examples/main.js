import Vue from 'vue';
import router from './routers';
import App from './App';
import Component from '../src/index';

Vue.use(Component);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
