import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SearchBar from './SearchBar';

let LoginContainer = ({ handleLogin, values }) =>
  <LoginForm onSubmit={values => handleLogin(values.LoginContainer)}/>

const mapDispatchToProps = (dispatch) => ({
  handleLogin: value => dispatch({ type: 'LOGGING_USER', payload: value }),
});

export default reduxForm({ form: 'LoginContainer' })(connect(null, mapDispatchToProps)(LoginContainer));
