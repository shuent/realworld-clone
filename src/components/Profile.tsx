import { RouteComponentProps } from '@reach/router'

const Profile = ({
  username = '',
}: RouteComponentProps<{ username: string }>) => {
  return <>Profile: {username}</>
}

export default Profile
