import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../actions/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom"

const LoginUser = ({ values, handleSubmit, dispatch, location }) => {
  const loginInfo = (values) => {
    dispatch(loginUser(values, dispatch))
  }

  return(
    <div align="center">
      <h1>Welcome Please Log In or <Link to="/signup">Sign Up</Link></h1>
        <form onSubmit={handleSubmit(loginInfo)}>
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

export default withRouter(connect()(reduxForm({
  form: 'LoginUser',
  loginUser
})(LoginUser)))
