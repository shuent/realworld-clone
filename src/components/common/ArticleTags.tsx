type ArticleTagsProps = {
  tagList: string[]
}

export const ArticleTags = ({ tagList }: ArticleTagsProps) => {
  return (
    <>
      <ul className="tag-list">
        {tagList.map((tag) => (
          <li className="tag-default tag-pill tag-outline" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </>
  )
}
