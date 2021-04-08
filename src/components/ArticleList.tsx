import { Link } from '@reach/router'
import React from 'react'
import { Articles, getArticles, getFeedArticles } from '../api/ArticlesApi'
import { useArticles } from '../contexts/articlesContext'
import { ITab } from '../reducers/articlesReducer'
import { IArticle, IProfile } from '../types'
import { ArticleTags } from './common/ArticleTags'
import { FavoritedButton } from './common/FavoriteButton'
import { ListPagenation } from './ListPagenation'

const loadArticles = (page = 0, tab: ITab) => {
  switch (tab.type) {
    case 'ALL':
      return getArticles(page)
    case 'FEED':
      return getFeedArticles(page)
    default:
      throw new Error('No type specified')
  }
  return getArticles(page)
}
export const ArticleList = () => {
  const {
    state: { articles, articlesCount, selectedTab, page },
    dispatch,
  } = useArticles()

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await loadArticles(page, selectedTab)
        dispatch({ type: 'FETCH_ARTICLE_BEGIN', payload: res.data })
      } catch (error) {
        console.log(`${error.message}`)
      }
    }
    fetchArticles()
  }, [page, selectedTab, dispatch])

  return (
    <>
      {articles.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
      <ListPagenation page={page} articlesCount={articlesCount} />
    </>
  )
}

type ArticlePreviewProps = {
  article: IArticle
}

const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <ArticleAvatar author={article.author} createdAt={article.createdAt} />
        <div className="pull-xs-right">
          <FavoritedButton article={article}>
            {article.favoritesCount}
          </FavoritedButton>
        </div>
      </div>
      <Link to={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ArticleTags tagList={article.tagList} />
      </Link>
    </div>
  )
}
type ArticleAvatarProps = {
  author: IProfile
  createdAt: Date
}
const ArticleAvatar = ({ author, createdAt }: ArticleAvatarProps) => {
  return (
    <>
      <img src={author.image} alt={author.username} />

      <div className="info">
        <Link className="author" to={`profile/${author.username}`}>
          {author.username}
        </Link>
        <span className="date">{new Date(createdAt).toDateString()}</span>
      </div>
    </>
  )
}
