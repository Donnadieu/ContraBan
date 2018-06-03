import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../actions/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const LoginForm = ({ values, handleSubmit, dispatch }) => {
  const submitInfo = (values) => {
    dispatch(loginUser(values, dispatch))
  };
  return(
    <div align="center">
      <h1>Please Login</h1>
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


export default withRouter(connect()(reduxForm({
  form: 'LoginForm',
  loginUser
})(LoginForm)))
