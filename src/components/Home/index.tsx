import { RouteComponentProps } from '@reach/router'
import { ArticlesProvider } from '../../contexts/articlesContext'
import { Hero } from './Hero'
import { MainView } from './MainView'
import { TagView } from './TagView'

const Home = (_: RouteComponentProps) => {
  return (
    <>
      <div className="home-page">
        <Hero />
        <div className="container page">
          <div className="row">
            <ArticlesProvider>
              <MainView />
              <TagView />
            </ArticlesProvider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
