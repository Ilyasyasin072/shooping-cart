import productApi_ from '../../../api/product/index.js';

const state = {
    product: [],
    product_detail: [],
    product_search: [],
}

const getters = {
    productGet : (state) => state.product,
    productGetId: (state) => (id) => {
        return state.product.find(product => product._id === id)
    },
    productDetail: (state) => state.product_detail,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    productSearch: (state) => state.product_search
}


const actions = {
    getProduct({ commit}) {
        productApi_.productApi((res) => {
            commit('PRODUCT_GET', res)
        })
    },

    getProductDetail({commit}, id) {
        productApi_.productDetailApi(id, (res) => {
         commit('PRODUCT_GET_DETAIL', res)
        })
    },

    getProductSearch({ commit}, query) {
        productApi_.productSearchApi(query, (res) => {
            commit('PRODUCT_SEARCH', res)
        })
    }
}

const mutations = {
    PRODUCT_GET(state, payload) {
        state.product = payload
    },

    PRODUCT_GET_DETAIL(state, payload) {
        state.product_detail = payload
    },

    PRODUCT_SEARCH(state, payload) {
        state.product_search = payload
    }
}



export default {
    state,
    getters,
    actions,
    mutations,
}
