
import axios from 'axios';
import { baseUri } from '../../config/http-common';

const api = axios.create({
    baseURL: baseUri.uri,
    headers: {
        'Content-Type': 'application/json'
      }
})

function getProductApi(cb) {
    api.get('product').then((res) => {
        cb(res.data.result)
    })
}

function getProductDetail(id, cb) {
    api.get('/product/show/'+id).then((res) => {
        cb(res.data.result[0])
    })
}

function getSearchProduct(query, cb) {
    api.get('/product/inventory/data', {
        params: {
            name: query
        }
    }).then((res) => {
        cb(res.data)
    })
}


export default  {
    productApi : (cb) => getProductApi(cb),
    productDetailApi : (id, cb) => getProductDetail(id,cb),
    productSearchApi : (query, cb) => getSearchProduct(query, cb)
}