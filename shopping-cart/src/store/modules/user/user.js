import productApi_ from '../../../api/product/index.js';

const state = {
    product: [],
    product_detail: []
}

const getters = {
    productGet : (state) => state.product,
    productGetId: (state) => (id) => {
        return state.product.find(product => product._id === id)
    },
    productDetail: (state) => state.product_detail,
}


const actions = {
    getProduct({ commit}) {
        productApi_.productApi((res) => {
            commit('PRODUCT_GET', res)
        })
    },
}

const mutations = {
    PRODUCT_GET(state, payload) {
        state.product = payload
    },
}



export default {
    state,
    getters,
    actions,
    mutations,
}
