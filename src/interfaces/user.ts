export interface RegisterInput {
  username: string,
  email: string,
  password: string
}

export interface LoginInput {
  identifier: string,
  password: string
}

export interface LoginResponse {
  jwt: string,
  user: User,
}

export interface User {
  blocked: boolean,
  confirmed: boolean,
  createdAt: string,
  email: string,
  id: number,
  provider: string,
  updatedAt: string,
  username: string,
}