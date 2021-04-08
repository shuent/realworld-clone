import { Router } from '@reach/router'
import { AuthProvider } from '../contexts/authContext'

import Article from './Article'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Router>
          <Home default path="/" />
          <Article path="/article/:slug" />
          <Login path="login" />
          <Profile path="profile/:username" />
          <Register path="register" />
          {/* Setting, editor, editor/:slug */}
        </Router>
      </AuthProvider>
    </>
  )
}
export default App
