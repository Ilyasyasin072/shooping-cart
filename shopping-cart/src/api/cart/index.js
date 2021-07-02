import axios from 'axios';

import { baseUri } from '../../config/http-common'

import { authHeader } from '../../utils/common'

const api = axios.create({
    baseURL: baseUri.uri,
    headers: {
        'Content-Type': 'application/json'
      }
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
    api.get('user/cart', {
        headers: {
            'Authorization': data
        }
    }).then((res) => {
        cb(res.data)
    })
}

function addCart(data, cb) {
    const token = authHeader().Authorization
    api.post('/user/cart/cart-create', {
        productId: data.productId,
        qty: data.qty,
        quantity: data.quantity,
        price: data.total,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((res) => {
        cb(res.data)
    })
}

function addCheckout(data, cb) {
    console.log(data.data, data.payment)
    const token = authHeader().Authorization
    for (let i = 0; i < data.data.length; i++) {
        api.post('/user/order-cart/create', {
            productId :  data.data[i],
            payment_id : data.payment
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((res) => {
            cb(res.data)
        })
    }

}


function removeCart(data, cb) {
    const token = authHeader().Authorization
    console.log(data.productId)
    api.put('/user/cart/remove', {
        _id: data.productId
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((res) => {
        console.log(res)
        cb(res.data)
    })
}

export default {
    getCartApi: (data, cb) => getCart(data, cb),
    addCartApi: (data, cb) => addCart(data, cb),
    removeCartApi: (data, cb) => removeCart(data, cb),
    checkoutApi: (data, cb) => addCheckout(data, cb)
}