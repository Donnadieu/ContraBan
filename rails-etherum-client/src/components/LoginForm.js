import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../actions/loginForm'
import { connect } from 'react-redux'

const LoginForm = ({ handleSubmit }) => {
  return(
    <form onSubmit={ handleSubmit }>
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
      <button type="submit" label="submit">Login</button>
    </form>
  )
}

const onSubmit = (values, dispatch) => {
  dispatch(loginUser(values))
};


export default connect()(reduxForm({
  form: 'userReducer',
  onSubmit,
})(LoginForm));
