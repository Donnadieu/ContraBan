import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { loginUser, signupUser } from '../actions/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom"

const SignupUser = ({ values, handleSubmit, dispatch, location }) => {

  const signupnInfo = (values) => {
    dispatch(signupUser(values, dispatch))
  }
  return(
    <div align="center">
      <h1>Welcome Please Sign Up or <Link to="/login">Log In</Link></h1>
        <form onSubmit={handleSubmit(signupnInfo)}>
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
        <button type="submit" label="submit">Signup</button>
      </form>
    </div>
  )
}

export default withRouter(connect()(reduxForm({
  form: 'SignupUser',
  loginUser
})(SignupUser)))
