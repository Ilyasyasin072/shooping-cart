import productApi_ from '../../../api/product/index.js';

const state = {
    product: []
}

const getters = {
    productGet : (state) => state.product
}


const actions = {
    getProduct({ commit}) {
        productApi_.productApi((res) => {
            commit('PRODUCT_GET', res)
        })
    }
}

const mutations = {
    PRODUCT_GET(state, payload) {
        state.product = payload
    }
}



export default {
    state,
    getters,
    actions,
    mutations,
}
