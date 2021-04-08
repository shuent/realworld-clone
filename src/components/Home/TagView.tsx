import React from 'react'

type Props = {}

export const TagView: React.FC<Props> = ({}) => {
  const isLoading = false
  const tags = ['ruby', 'python', 'javascript']
  return (
    <>
      <div className="col-md-3">
        <div className="sidebar">
          <p>Popular tags</p>
          {isLoading ? (
            <div>Loading Tags...</div>
          ) : (
            <div className="tag-list">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="tag-pill tag-default"
                  onClick={() => {}}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
