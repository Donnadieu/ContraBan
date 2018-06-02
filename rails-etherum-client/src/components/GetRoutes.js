import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import React from 'react'
import { connect } from 'react-redux';
import LoginForm from './LoginForm'
import { withRouter } from 'react-router-dom'

const GetRoutes = ({currentUser}) =>{
  const userLoggedIn = currentUser.is_authenticated
  const authRoutes = () => {
    console.log(userLoggedIn);
    if (userLoggedIn) {
      return (
        <div>
          <Redirect from="/" to="/dashboard"/>
          <Redirect from="/login" to="/dashboard"/>
          <Redirect from="/signup" to="/dashboard"/>
          <Route exact path="/dashboard" component={() => <h1>{currentUser.email}</h1>} />
        </div>
      )
    } else {
      return (
        <div>
          <Route exact path="/login" component={LoginForm} />
          <Redirect from="/dashboard" to="/login"/>
        </div>
      )
    }
  }
  return(
    <div>
      {authRoutes()}
    </div>
  )
}

export default withRouter(connect()(GetRoutes))
