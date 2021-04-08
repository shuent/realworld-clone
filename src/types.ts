export interface IProfile {
  username: string
  bio: string
  image: string
  following: boolean
}
export interface IArticle {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: Date
  updateAt: Date
  favorited: boolean
  favoritesCount: number
  author: IProfile
}

export interface IUser {
  username: string
  email: string
  bio: string
  image: string
}