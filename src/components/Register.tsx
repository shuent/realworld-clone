import { Link, navigate, RouteComponentProps } from '@reach/router'
import React, { useState } from 'react'
import { register } from '../api/AuthApi'
import { useAuth } from '../contexts/authContext'

const Register = (_: RouteComponentProps) => {
  const [form, setForm] = useState({
    username: '',
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
      const user = await register({ ...form })
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
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>
            #todo error comes here
            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  name="username"
                  type="text"
                  placeholder="Your Name"
                  className="form-control form-control-lg"
                  value={form.username}
                  onChange={handleChange}
                />
              </fieldset>
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

export default Register
