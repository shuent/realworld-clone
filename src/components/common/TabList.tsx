import React from 'react'
import { useArticles } from '../../contexts/articlesContext'
import { ITab } from '../../reducers/articlesReducer'

type Props = {
  data: ITab[]
}

export const TabList = ({ data }: Props) => {
  const {
    state: { selectedTab },
    dispatch,
  } = useArticles()

  const tabs = data.map((tab) => (
    <Tab
      key={tab.label}
      isSelected={selectedTab.type === tab.type}
      onClick={() => {
        dispatch({ type: 'SET_TAB', tab })
      }}
    >
      {tab.label}
    </Tab>
  ))
  return <ul className="nav nav-pills outline-active">{tabs}</ul>
}

type TabProps = {
  isSelected: boolean
  onClick: () => void
  children: React.ReactNode
}

const Tab = ({ isSelected, onClick, children }: TabProps) => {
  const classNames = ['nav-link']
  if (isSelected) classNames.push('active')
  return (
    <li className="nav-item">
      <button className={classNames.join(' ')} onClick={onClick}>
        {children}
      </button>
    </li>
  )
}
