import axios from 'axios'
import { baseUrl } from '../../helpers/consts'

export default class LoginService {
    static loginUser(model){
        return axios.post(baseUrl+'api/account/login', model)
    }
}



