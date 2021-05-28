import { createStore } from 'vuex'
import product from './modules/product/index';
export default createStore({
  modules: {
    product
  }
})
