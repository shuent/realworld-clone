import { IArticle } from '../types'

export type ArticlesAction =
  | {
      type: 'FETCH_ARTICLE_BEGIN'
      payload: { articles: IArticle[]; articlesCount: number }
    }
  | { type: 'SET_TAB'; tab: ITab }
  | { type: 'SET_PAGE'; page: number }

export type ITab =
  | { type: 'ALL'; label: string }
  | { type: 'FEED'; label: string }
  | { type: 'TAG'; label: string }

export type ArticlesState = {
  articles: IArticle[]
  articlesCount: number
  selectedTab: ITab
  page: number
}

export const initialState: ArticlesState = {
  articles: [],
  articlesCount: 0,
  selectedTab: { type: 'ALL', label: 'Global Feed' },
  page: 0,
}

export const articlesReducer = (
  state: ArticlesState,
  action: ArticlesAction
): ArticlesState => {
  switch (action.type) {
    case 'FETCH_ARTICLE_BEGIN':
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      }
    case 'SET_TAB':
      return {
        ...state,
        selectedTab: action.tab,
      }
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page,
      }

    default:
      return state
  }
}
