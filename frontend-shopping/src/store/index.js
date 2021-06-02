import { createStore } from 'vuex'
import product from './modules/product/index';
import cart from './modules/cart/index';
export default createStore({
  modules: {
    product,
    cart
  }
})
