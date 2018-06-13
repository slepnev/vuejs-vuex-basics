import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import Users from './components/Users.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/users', component: Users}
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
