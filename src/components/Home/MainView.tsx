import React from 'react'
import { ITab } from '../../reducers/articlesReducer'
import { ArticleList } from '../ArticleList'
import { TabList } from '../common/TabList'

type Props = {}

export const MainView: React.FC<Props> = ({}) => {
  const tabsData: ITab[] = [
    { type: 'FEED', label: 'Your feed' },
    { type: 'ALL', label: 'Global feed' },
  ]
  return (
    <>
      <div className="col-md-9">
        <div className="feed-toggle">
          <TabList data={tabsData} />
        </div>
        <ArticleList />
      </div>
    </>
  )
}
