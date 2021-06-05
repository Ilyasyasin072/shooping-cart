import authApi from '../../../api/auth/login'

import { userGet } from '../../../utils/common';

const user = userGet();

const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };


const actions = {
    login( {commit} , { email, password }) {
        commit('loginRequest', { email, password })
        // console.log(email, password);
        authApi.authApi( { email: email, password: password }, (res) => {
            commit('loginSuccess', res);
           })
    }
}


const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
}

export default {
    state,
    actions,
    // getters,
    mutations
}