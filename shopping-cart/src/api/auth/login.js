import axios from 'axios';

import { baseUri } from '../../config/http-common'


import { setUserSession } from '../../utils/common';

const api = axios.create({
    baseURL: baseUri.uri
})


function auth(data,cb) {
    api.post('/auth/login', data).then((res) => {
        setUserSession(res.data.token, res.data.name.first)
        cb(res.data)
    })
}

function register(data, cb) {
    api.post('/auth/register', data).then((res) => {
        cb(res.data)
    })
}


export default {
    authApi: (data, cb) => auth(data, cb),
    registerApi : (data, cb) => register(data, cb)
}