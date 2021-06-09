
import axios from 'axios';
import { baseUri } from '../../config/http-common';

const api = axios.create({
    baseURL: baseUri.uri
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


export default  {
    productApi : (cb) => getProductApi(cb),
    productDetailApi : (id, cb) => getProductDetail(id,cb)
}