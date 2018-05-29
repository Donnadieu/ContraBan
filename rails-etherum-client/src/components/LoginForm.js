import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm  = props => {
  const { handleSubmit } = props
  return(
    <form>
      <Field
        name="username"
        type="text"
        label="Username"
      />
      <Field
        name="password"
        type="password"
        label="Password"
      />
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  )
}

export default LoginForm
