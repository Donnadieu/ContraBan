import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class LoginForm extends Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            label="Email"
            placeholder="Email"
          />
        </div>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            label="Password"
            placeholder="Password"
          />
        </div>
        <button type="submit" label="submit">Login</button>
      </form>
    );
  }
}

LoginForm = reduxForm ({
  form: 'login',
}) (LoginForm);

export default LoginForm;
