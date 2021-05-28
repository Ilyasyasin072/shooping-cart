
import axios from 'axios';
import { baseUri } from '../../config/http-common';

const api = axios.create({
    baseURL: baseUri.uri
})
console.log(baseUri)

function getProductApi(cb) {
    api.get('product').then((res) => {
        console.log(res.data);
        cb(res.data)
    })
}


export default  {
    productApi : (cb) => getProductApi(cb)
}