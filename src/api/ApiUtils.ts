import { navigate } from '@reach/router'
import axios from 'axios'


export const TOKEN_KEY = 'token'

axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        navigate('/register')
        break
      case 404:
      case 403:
        navigate('/')
        break
    }
    return Promise.reject(error.response)
  }
)

export const setToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization'] 
  }
}

export {axios as api}
