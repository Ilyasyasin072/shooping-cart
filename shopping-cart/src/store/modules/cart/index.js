import cartApi from '../../../api/cart/index'

const state = {
    cartItems:[],
    checkout: []
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

    addCheckout({commit}, cartItems) {
        cartApi.checkoutApi(cartItems,(res) => {
            commit('GET_CHECKOUT', res)
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

    GET_CHECKOUT(state, payload) {
        state.checkout = payload
    },

}



export default {
    state,
    actions,
    getters,
    mutations
}