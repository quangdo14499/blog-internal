export interface CreateRequest {
  data: {
    title: string
    description: string
    content: string
    author: string
  }
}

export interface DeleteRequest {
  id: number
  title: string
}

export interface EditRequest {
  id: number
  data: {
    title: string
    description: string
    content: string
    author: string
  }
}
