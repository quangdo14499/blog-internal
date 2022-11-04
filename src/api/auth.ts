import axiosClient from './axiosClient'
import {
  changePasswordRequest,
  LoginInput,
  RegisterInput,
} from './request/UserRequest'
import urls from '../contants/urls'
import { AxiosResponse } from 'axios'
import { LoginResponse, User } from './response/UserResponse'

class Auth {
  register = (body: RegisterInput): Promise<AxiosResponse<LoginResponse>> => {
    return axiosClient.post(`${urls.API_URL}auth/local/register`, {
      username: body.username,
      email: body.email,
      password: body.password,
    })
  }

  login = (body: LoginInput): Promise<AxiosResponse<LoginResponse>> => {
    return axiosClient.post(`${urls.API_URL}auth/local`, body)
  }

  confirmed = (): Promise<AxiosResponse<User>> => {
    return axiosClient.get(`${urls.API_URL}users/me`)
  }

  changePassword = (body: changePasswordRequest): Promise<AxiosResponse<LoginResponse>> => {
    return axiosClient.post(`${urls.API_URL}auth/change-password`, body)
  }
}

const auth = new Auth()
export default auth
