import { IUser } from '../types'
import { setLocalStorage } from '../utils'
import { api, setToken, TOKEN_KEY } from './ApiUtils'

type UserRes = {
  user: IUser & { token: string }
}

const handleUserResponse = ({ user: { token, ...user } }: UserRes): IUser => {
  setLocalStorage(TOKEN_KEY, token)
  setToken(token)
  return user
}

export const register = async (user: {
  username: string
  email: string
  password: string
}) => {
  const _user = await api.post<UserRes>('/users', { user })
  return handleUserResponse(_user.data)
}

export const login = async (user: { email: string; password: string }) => {
  const _user = await api.post<UserRes>('/users/login', { user })
  return handleUserResponse(_user.data)
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  setToken(null)
}
