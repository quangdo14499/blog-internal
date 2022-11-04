import { AxiosResponse } from "axios"
import urls from "../contants/urls"
import axiosClient from "./axiosClient"
import { CreateRequest, EditRequest } from "./request/BlogRequest"
import { BlogResponse } from "./response/BlogResponse"

class Blog {
  createBlog = (body: CreateRequest): Promise<AxiosResponse<BlogResponse>> => {
    return axiosClient.post(`${urls.API_URL}blogs`, body)
  }

  getBlog = (): Promise<AxiosResponse<{data:BlogResponse}>> => {
    return axiosClient.get(`${urls.API_URL}blogs`)
  }

  deleteBlog = (id: number): Promise<AxiosResponse<{data:BlogResponse}>> => {
    return axiosClient.delete(`${urls.API_URL}blogs/${id}`)
  }

  editBlog = (item:EditRequest): Promise<AxiosResponse<{data:BlogResponse}>> => {
    return axiosClient.put(`${urls.API_URL}blogs/${item.id}`, {data:item.data})
  }
}

const blog = new Blog()
export default blog