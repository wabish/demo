var Vue = require('vue');
var VueRouter = require('vue-router');
var Login = require('./components/login.vue');
var Register = require('./components/register.vue');

Vue.use(VueRouter);

var routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register }
];

var router = new VueRouter({
  routes: routes
});

var App = new Vue({
  router: router
}).$mount('#app');