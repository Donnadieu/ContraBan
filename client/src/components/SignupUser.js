import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { signupUser } from '../actions/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom"
import { Alert } from 'react-bootstrap'

const SignupUser = ({ values, handleSubmit, dispatch, location }) => {

  const signupnInfo = (values) => {
    dispatch(signupUser(values, dispatch))
  }
  return(
    <div className="wrapper">
      <div className="container-login">
        <div className="stencil">
            <div className="line">
                <div className="line"></div>
            </div>
        </div>
        <div className="border-triangle"></div>
        <div className="content-triangle"></div>
        <div className="enter-triangle-one"></div>
        <div className="enter-triangle-two"></div>
        <form onSubmit={handleSubmit(signupnInfo)}>
          <div>
            <label>SIGNUP</label>
          </div>
          <div className="input-inform">
            <Field
              name="email"
              component={renderField}
              type="text"
              placeholder="Email"
              label="Email"
            />
            <Field
              name="password"
              component={renderField}
              type="password"
              placeholder="Password"
              label="Password"
            />
          </div>
          <div className="enter">
            <button type="submit" label="submit" className="btn-lg btn-info">Sigup</button>
          </div>
          <div className="form-links">
            <span className="glyphicon glyphicon-user text-primary"></span> <Link className="btn-lg btn btn-light" to="/login">Login</Link>
          </div>
        </form>
      </div>
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
    <input {...input} placeholder={label} type={type} className="form-control input-md"/>
    {touched && ((error && <Alert bsStyle="danger"><strong>Required</strong></Alert>) || (warning && <span>{error}</span>))}
  </div>
)

export default withRouter(connect()(reduxForm({
  form: 'SignupUser',
  signupUser, validate
})(SignupUser)))
