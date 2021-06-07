import axios from 'axios';

import { baseUri } from '../../config/http-common'


import { setUserSession } from '../../utils/common';

const api = axios.create({
    baseURL: baseUri.uri
})


function auth(data,cb) {
    api.post('/auth/login', data).then((res) => {
        console.log(res.data);
        setUserSession(res.data.token, res.data.user)
        cb(res.data)
    })
}


export default {
    authApi: (data, cb) => auth(data, cb),
}