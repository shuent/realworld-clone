import React, { ReactChild } from 'react'
import {
  initialState,
  ArticlesAction,
  ArticlesState,
  articlesReducer,
} from '../reducers/articlesReducer'

type ArticlesConetxtProps = {
  state: ArticlesState
  dispatch: React.Dispatch<ArticlesAction>
}

const ArticlesConetxt = React.createContext<ArticlesConetxtProps>({
  state: initialState,
  dispatch: () => initialState,
})

export const ArticlesProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(articlesReducer, initialState)
  return <ArticlesConetxt.Provider value={{ state, dispatch }} {...props} />
}

export const useArticles = () => {
  const context = React.useContext(ArticlesConetxt)
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider')
  }
  return context 
}
