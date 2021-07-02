
import axios from 'axios';
import { baseUri } from '../../config/http-common';
const api = axios.create({
    baseURL: baseUri.uri,
    headers: {
        'Content-Type': 'application/json'
      }
})

function getUserProfile(data, cb) {
    api.get('/user', { headers : {
        'Authorization':  data  }}).then((res) => {
        cb(res.data)
    })
}


export default  {
    userProfile : (data, cb) => getUserProfile(data, cb),
}