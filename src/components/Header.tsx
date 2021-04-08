import { Link, LinkProps, LinkGetProps } from '@reach/router'
import React from 'react'
import { logout } from '../api/AuthApi'
const Header = () => {
  const user = false
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Conduit Clone
        </Link>
        {user ? <LoggedInView /> : <LoggedOutView />}
      </div>
    </nav>
  )
}

const LoggedInView = () => {
  return <div>login</div>
}
const handleSignOut = (event: React.SyntheticEvent) => {
  event.preventDefault()
  logout()
}
const LoggedOutView = () => (
  <ul className="nav navbar-nav pull-xs-right">
    <li className="nav-item">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="login">Sign In</NavLink>
    </li>
    <li className="nav-item">
      <a href="#" onClick={handleSignOut}>
        Sign Out
      </a>
    </li>
  </ul>
)

const NavLink = (props: LinkProps<{}>) => {
  // @ts-ignore TS2322
  return <Link getProps={isActive} {...props} />
}

const isActive = ({ isCurrent }: LinkGetProps) =>
  isCurrent ? { className: 'nav-link active' } : { className: 'nav-link' }

export default Header
