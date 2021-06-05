import { createStore } from 'vuex'
import product from './modules/product/index';
import cart from './modules/cart/index';
import auth from './modules/auth/login'
export default createStore({
  modules: {
    product,
    cart,
    auth,
  }
})
