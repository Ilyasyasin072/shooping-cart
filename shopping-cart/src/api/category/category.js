import axios from 'axios';

import { baseUri } from '../../config/http-common'

const api = axios.create({
    baseURL: baseUri.uri,
    headers: {
        'Content-Type': 'application/json'
      }
})


function CategoryApiGet(cb){
    api.get('product/category').then((res) => {
        cb(res.data.result)
    })
}

function CategoryShowGetApi(query, cb) {
    api.get('product/category/show/'+query).then((res) => {
        console.log(res);
        cb(res.data[0]);
    })
}


export default {
    CategoryApi : (cb) => CategoryApiGet(cb),
    CategoryShowApi : (query, cb) => CategoryShowGetApi(query, cb)
}