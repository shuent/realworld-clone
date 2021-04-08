import { Link, navigate, RouteComponentProps } from '@reach/router'
import React, { useState } from 'react'
import { login } from '../api/AuthApi'
import { useAuth } from '../contexts/authContext'

const Login = (_: RouteComponentProps) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const { state, dispatch } = useAuth()
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const user = await login({ ...form })
      dispatch({ type: 'LOAD_USER', user })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an Acount?</Link>
            </p>
            #todo error comes here
            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-control form-control-lg"
                  value={form.email}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-control form-control-lg"
                  value={form.password}
                  onChange={handleChange}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
