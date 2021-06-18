import Vue from 'vue'
import Vuex from 'vuex'

import product from './modules/product/index';
import cart from './modules/cart/index';
import auth from './modules/auth/login'
import user from './modules/user/user'
import order from './modules/order/order'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    cart,
    auth,
    user,
    order
  }
})


export default store;