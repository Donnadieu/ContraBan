import React, { Component } from 'react'

class LoginUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      formErrors: {
        email: '',
        password: ''
      },
      touched: {
        email: false,
        password: false,
      },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }
  handleChange = (event) =>{
    const name = event.target.name
    const value = event.target.value
     this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    return fetch(`http://localhost:3000/api/auth/login`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        { "user": {
          "email" : event.target.elements.email.value,
          "password" : event.target.elements.password.value
        }
      })
    })
  }

  handleBlur = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    })
    this.validateField(name, value)
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
        break
      case 'password':
        passwordValid = value.length >= 7;
        fieldValidationErrors.password = passwordValid ? '': 'Password is too short'
        break
      default:
        break
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm)
  }

  validateForm(){
    this.setState({formValid: this.state.emailValid && this.state.passwordValid})
  }

  errorClass(error){
    return(error.length === 0 ? '' : 'has-error');
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Email:</label>
        <br></br>
        <div className={`form-group${this.errorClass(this.state.formErrors.email)}`}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
            required
            onBlur={this.handleBlur}
            />
          <div>
            {(this.state.touched.email && !this.state.emailValid)? <p style={{color: 'red'}}><strong>{this.state.formErrors.email}</strong></p> : null }
          </div>
        </div>
        <label>Password:</label>
        <div className={`form-group${this.errorClass(this.state.formErrors.password)}`}>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
            required
            onBlur={this.handleBlur}
            />
          <div>
            {(this.state.touched.password && !this.state.passwordValid)? <p style={{color: 'red'}}><strong>{this.state.formErrors.password}</strong></p> : null }
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary"
          disabled={!this.state.formValid}
        />
     </form>
    )
  }
}

export default LoginUser
