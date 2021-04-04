import { Router } from '@reach/router'

import Article from './components/Article'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'

function App() {
  return (
    <Router>
      <Home default path="/" />
      <Article path="/article/:slug" />
      <Login path="login" />
      <Profile path="profile/:username" />
      <Register path="register" />
      {/* Setting, editor, editor/:slug */}
    </Router>
  )
}

export default App
