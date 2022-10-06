export interface User {
  username: string,
  email: string,
  password: string
}

export interface LoginInput {
  identifier: string,
  password: string
}