import { IArticle } from "../../types"

type FavoritedButtonProps = {
  article: IArticle
  children: React.ReactNode
}
export const FavoritedButton = ({ article, children }: FavoritedButtonProps) => {
  const classNames = ['btn', 'btn-sm']
  if (article.favorited) {
    classNames.push('btn-primary')
  } else {
    classNames.push('btn-outline-primary')
  }
  
  return (
    <button className={classNames.join(' ')} onClick={() => { }} disabled={false}>
      <i className="ion-heart"></i>
      &nbsp;
      {children}
    </button>
  )
}