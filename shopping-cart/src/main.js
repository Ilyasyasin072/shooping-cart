import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from "vue-router"
import router from './router/index'
import store from './store/index'
import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueJwtDecode)
Vue.config.productionTip = false

window.onload = function () {
  // const router = new VueRouter({ mode: 'history', router: router_, });
  const app = new Vue(Vue.util.extend({ router,'$route' (to) {
    if(to.currentRoute.meta.reload==true){window.location.reload()}
}, store }, App)).$mount("#app");
  return { app };
}