import category_api from '../../../api/category/category'

const state = {
    categories: [],
    categories_detail: []
}

const getters = {
    categoryGet: (state) => state.categories,
    categoryShow: (state) => state.categories_detail
}

const actions = {
    getCategoryories({commit}) {
        category_api.CategoryApi((res) => {
            commit('CATEGORY_GET', res);
        })
    } ,

    showCategories({commit}, query) {
        category_api.CategoryShowApi(query, (res) => {
            commit('CATEGORY_DETAIL_GET', res)
        })
    }
}

const mutations = {

    CATEGORY_GET(state, payload) {
        state.categories = payload
    },

    CATEGORY_DETAIL_GET(state, payload) {
        state.categories_detail = payload
    }
}


export default {
    state,
    actions,
    mutations,
    getters,
}