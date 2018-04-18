import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';
import $ from 'jquery'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
