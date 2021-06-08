
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


export default  {
    productApi : (cb) => getProductApi(cb)
}