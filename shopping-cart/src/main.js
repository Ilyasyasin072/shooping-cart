import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from "vue-router"
import routes from './router/index'
import store from './store/index'

import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

window.onload = function () {
  const router = new VueRouter({ mode: 'history', routes: routes, });
  const app = new Vue(Vue.util.extend({ router, store }, App)).$mount("#app");
  return { app, router };
}