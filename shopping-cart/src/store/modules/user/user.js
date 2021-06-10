import userApi from '../../../api/user/user';

const state = {
    userLogin: null,
}

const getters = {
    getUserProfile: (state) => state.userLogin,
}


const actions = {
    getUserProfileAction({ commit}, token) {
        userApi.userProfile(token,(res) => {
            commit('USER_PROFILE', res)
        })
    },
}

const mutations = {
    USER_PROFILE(state, payload) {
        state.userLogin = payload
    },
}



export default {
    state,
    getters,
    actions,
    mutations,
}
