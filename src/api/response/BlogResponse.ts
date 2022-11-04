export interface BlogResponse {
  attributes: {
    title: string
    description: string
    content: string
    createdAt: string
    updatedAt: string
  }
  id: number
}