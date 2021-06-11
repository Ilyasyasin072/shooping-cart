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

function getCart(data, cb) {
    api.get('user/cart',  { headers : {
        'Authorization':  data  }}).then((res) => {
        cb(res.data)
    })
}

function addCart(data, cb) {
    api.post('user/cart/cart-create').then((res) => {
        cb(res.data)
    })
}

export default {
    getCartApi: (data, cb) => getCart(data, cb),
    addCartApi: (data,cb) => addCart(data,cb)
}