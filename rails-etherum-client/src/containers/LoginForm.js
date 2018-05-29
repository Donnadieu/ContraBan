import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class LoginForm extends Component {
  render(){
    const { handleSubmit } = this.props

    return(
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="Email"
          />
        </div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginForm)
