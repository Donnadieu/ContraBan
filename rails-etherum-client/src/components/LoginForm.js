import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../actions/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link, Redirect } from "react-router-dom"

const LoginForm = ({ values, handleSubmit, dispatch, location }) => {
  const submitInfo = (values) => {
    dispatch(loginUser(values, dispatch))
  };

  const renderForm = (location) => {
    if (location.pathname === "/login"){
      return (
        <div align="center">
          <h1>Welcome Plese Log In or <Link to="/signup">Sign Up</Link></h1>
            <form onSubmit={handleSubmit(submitInfo)}>
            <div>
              <label><strong>Email</strong></label>
              <br></br>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <label><strong>Password</strong></label>
              <br></br>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
              />
            </div>
            <br></br>
            <button type="submit" label="submit">Login</button>
          </form>
        </div>
      )
      } else if (location.pathname === "/signup") {
        return(
          <div align="center">
            <h1>Welcome Plese Sign Up or <Link to="/login">Log In</Link></h1>
              <form onSubmit={handleSubmit(submitInfo)}>
              <div>
                <label><strong>Email</strong></label>
                <br></br>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div>
                <label><strong>Password</strong></label>
                <br></br>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <br></br>
              <button type="submit" label="submit">Login</button>
            </form>
          </div>
      )
    }
  }
  return(
    renderForm(location)
  )
}


export default withRouter(connect()(reduxForm({
  form: 'LoginForm',
  loginUser
})(LoginForm)))
