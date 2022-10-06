import axiosClient from './axiosClient'
import { LoginInput, LoginResponse, RegisterInput } from '../interfaces/user'
import urls from '../contants/urls'
import { AxiosResponse } from 'axios'

class Auth {
  register = (body: RegisterInput): Promise<AxiosResponse<LoginResponse>> => {
    return axiosClient.post(`${urls.API_URL}auth/local/register`, {
      username: body.username,
      email: body.email,
      password: body.password,
    })
  }

  login = (body: LoginInput) => {
    return axiosClient.post(`${urls.API_URL}auth/local`, body)
  }
}

const auth = new Auth()
export default auth
