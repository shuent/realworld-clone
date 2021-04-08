import { IArticle } from '../types'
import { api } from './ApiUtils'

export type Articles = {
  articles: IArticle[]
  articlesCount: number
}

const limit = (count: number, page: number) => {
  return `limit=${count}&offset=${page ? page * count : 0}`
}

export const getArticles = (page: number) => {
  return api.get<Articles>(`/articles?${limit(10, page)}`)
}
export const getFeedArticles = (page: number) => {
  return api.get<Articles>(`/articles/feed?${limit(10, page)}`)
}