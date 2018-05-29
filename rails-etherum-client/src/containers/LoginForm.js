import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class LoginForm extends Component {
  render(){
    const { handleOnSubmit } = this.props

    return(
      <form onSubmit={handleOnSubmit}>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        />
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="Password"
        />
        <button type="submit" label="submit">Submit</button>
      </form>
    )
  }
}

LoginForm = reduxForm ({
  form: 'login',
}) (LoginForm);

export default LoginForm
