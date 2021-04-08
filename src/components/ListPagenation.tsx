import { useArticles } from '../contexts/articlesContext'

type ListPagenationProps = {
  page: number
  articlesCount: number
}

export const ListPagenation = ({
  page,
  articlesCount,
}: ListPagenationProps) => {
  const { dispatch } = useArticles()

  const pageNumbers = Array.from(
    { length: Math.ceil(articlesCount / 10) },
    (v, k) => k
  )
  return (
    <nav>
      <div className="pagenation">
        <ul>
          {pageNumbers.map((num) => {
            const isCurrent = num === page
            return (
              <li
                className={isCurrent ? 'page-item active' : 'page-item'}
                onClick={() => dispatch({ type: 'SET_PAGE', page: num })}
                key={num}
              >
                <button className="page-link">{num}</button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
