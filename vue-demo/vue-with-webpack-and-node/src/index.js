import Promise from 'promise-polyfill';
import Vue from 'vue';
import router from './routers';
import App from './App';

// 兼容 IE9
if (!window.Promise) {
  window.Promise = Promise;
}

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});