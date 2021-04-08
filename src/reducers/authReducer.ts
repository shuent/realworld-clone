import { IUser } from '../types'

export type AuthAction =
  | { type: 'LOGIN' }
  | { type: 'LOAD_USER'; user: IUser }
  | { type: 'LOGOUT' }

export interface AuthState {
  isAuthenticated: boolean
  user: IUser | null
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true }
    case 'LOAD_USER':
      return { ...state, user: action.user }
    case 'LOGOUT':
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}
