import axios from 'axios';

import { baseUri } from '../../config/http-common'


const api = axios.create({
    baseURL: baseUri.uri
})

// function getCartPromise(cart) {
//     return new Promise((resolve, reject) => {
//         if (cart.length > 0) {
//             return resolve(cart);
//         } else {
//             return reject(cart)
//         }
//     })
// }

function getCart(cb) {
    api.get('cart').then((res) => {
        cb(res.data)
    })
}

function addCart(data, cb) {
    api.post('cart/add').then((res) => {
        cb(res.data)
    })
}

export default {
    getCartApi: cb => getCart(cb),
    addCartApi: (data,cb) => addCart(data,cb)
}