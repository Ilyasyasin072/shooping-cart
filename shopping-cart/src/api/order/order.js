import axios from 'axios';

import { baseUri } from '../../config/http-common'

import { authHeader } from '../../utils/common'

const api = axios.create({
    baseURL: baseUri.uri,
    headers: {
        'Content-Type': 'application/json'
      }
})

function orderDetail(cb) {
    const token = authHeader().Authorization
    api.get('user/order-cart/detail', {
        headers: {
            'Authorization': token
        }
    }).then((res) => {
        cb(res.data)
    })
}

export default {
    getOrderDetailApi: (cb) => orderDetail(cb),
}