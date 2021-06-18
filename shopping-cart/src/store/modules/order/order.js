import orderApi from '../../../api/order/order';

const state = {
    order: [],
}

const getters = {
    orderDetail : (state) => state.order,
}


const actions = {
    getOrderDetail({ commit}) {
        orderApi.getOrderDetailApi((res) => {
            commit('ORDER_DETAIL_GET', res)
        })
    }
}

const mutations = {
    ORDER_DETAIL_GET(state, payload) {
        state.order = payload
    },
}



export default {
    state,
    getters,
    actions,
    mutations,
}
