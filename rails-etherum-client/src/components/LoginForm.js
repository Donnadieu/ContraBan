import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

const LoginForm = ({ handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        />
      </div>
      <div>
        <Field
          name="password"
          component="input"
          name="search"
          type="password"
          placeholder="Password"
        />
      </div>
      <button type="submit" label="submit">Login</button>
    </form>
  )
}

export default reduxForm({ form: 'LoginForm' })(LoginForm)
