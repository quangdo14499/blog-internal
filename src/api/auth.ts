import axiosClient from "./axiosClient";
import { LoginInput, User } from "../interfaces/user";
import urls from "../contants/urls";

class Auth {
  register = (body: User) =>{
    return axiosClient.post(`${urls.API_URL}auth/local/register`, {
      username: body.username,
      email: body.email,
      password: body.password
    });
  };
  
  login = (body: LoginInput) => {
    return axiosClient.post(`${urls.API_URL}auth/local`, body);
  }
}

const auth = new Auth();
export default auth;