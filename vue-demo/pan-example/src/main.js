import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import TableView from './components/TableView.vue';

Vue.use(VueRouter);

var Bar = { template: '<div>bar</div>' };

const router = new VueRouter({
  routes: [{
    path: '/left/:id',
    name: 'left',
    component: TableView
  }, {
    path: '/right',
    component: Bar
  }] 
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
