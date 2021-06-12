import cartApi from '../../../api/cart/index'

const state = {
    cartItems: [],
}

const getters ={
    cartItems : (state) => state.cartItems,
    // cartTotal: state => {
    //     // return state.cartItems.reduce((acc, cartItem) => {
    //     //   return (cartItem.quantity * cartItem.price) + acc;
    //     // }, 0).toFixed(2);
    //   },
    //   cartQuantity: state => {
    //     return state.cartItems.reduce((acc, cartItem) => {
    //       return cartItem.quantity + acc;
    //     }, 0);
    //   }
}

const actions = {
    getStoreCart({commit}, token) {
       cartApi.getCartApi(token,(res) => {
        commit('GET_CART', res);
       })
    },


    addCart({commit}, cartItems) {
        cartApi.addCartApi( cartItems, (res) => {
            commit('GET_CART', res)
        })
    },

    removeCart({commit}, cartItems) {
        cartApi.removeCartApi(cartItems, (res) => {
            commit('GET_CART', res)
        })
    }

}

const mutations = {

    GET_CART(state, payload) {
        state.cartItems = payload
    },

}



export default {
    state,
    actions,
    getters,
    mutations
}