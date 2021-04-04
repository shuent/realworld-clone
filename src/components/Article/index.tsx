import { RouteComponentProps } from '@reach/router'

const Article = ({ slug = '' }: RouteComponentProps<{ slug: string }>) => {
  return <>Article:{slug}</>
}

export default Article
