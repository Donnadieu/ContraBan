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
          <Field
            name="email"
            component={renderField}
            type="text"
            placeholder="Email"
            label="Email"
          />
        </div>
        <div>
          <Field
            name="password"
            component={renderField}
            type="password"
            placeholder="Password"
            label="Password"
          />
        </div>
        <br></br>
        <button type="submit" label="submit">Login</button>
      </form>
    </div>
  )
}

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 7) {
    errors.password = 'Must be greater than 7'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label><strong>{label}</strong></label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export default withRouter(connect()(reduxForm({
  form: 'LoginUser',
  loginUser, validate
})(LoginUser)))
