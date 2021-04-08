import React, { useReducer } from 'react'
import { setToken, TOKEN_KEY } from '../api/ApiUtils'
import {
  AuthAction,
  authReducer,
  AuthState,
  initialState,
} from '../reducers/authReducer'
import { getLocalStorageValue } from '../utils'

type AuthContextProps = {
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
}

const AuthContext = React.createContext<AuthContextProps>({
  state: initialState,
  dispatch: () => initialState,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  React.useEffect(() => {
    const token = getLocalStorageValue(TOKEN_KEY)
    if (!token) return
    setToken(token) // TODO: expire to logout
  }, [])
  return (
    <AuthContext.Provider value={{ state, dispatch }} children={children} />
  )
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}
