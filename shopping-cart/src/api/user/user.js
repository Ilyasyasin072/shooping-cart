
import axios from 'axios';
import { baseUri } from '../../config/http-common';
import { authHeader } from '../../utils/common'
const api = axios.create({
    baseURL: baseUri.uri
})

function getUserProfile(cb) {
    const token = authHeader().Authorization;
    api.get('user', { headers : {
        'Authorization': 'SHOPPINGCART ' + token
    }}).then((res) => {
        cb(res.data)
    })
}


export default  {
    userProfile : (cb) => getUserProfile(cb),
}