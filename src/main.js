import Vue from 'vue'
import App from './App.vue'

import UVA from './components/UVA.vue'
import Codeforces from './components/Codeforces.vue'

// import vue router
import VueRouter from 'vue-router';

// use VueRouter
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: UVA },
    { path: '/uva', component: UVA },
    { path: '/codeforces', component: Codeforces}
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
