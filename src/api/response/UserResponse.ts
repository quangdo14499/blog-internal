export interface LoginResponse {
  jwt: string
  user: User
}

export interface User {
  blocked: boolean
  confirmed: boolean
  createdAt: string
  email: string
  id: number
  provider: string
  updatedAt: string
  username: string
}
