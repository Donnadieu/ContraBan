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

  const authRoutes = (currentUser) => {
    const userLoggedIn = currentUser.is_authenticated
    if (userLoggedIn) {
      return (
        <div>
          <Route exact path="/dashboard" render={() => <h1>{currentUser.email}</h1>} />
        </div>
      )
    } else {
      return (
        <div>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={LoginForm} />
        </div>
      )
    }
  }
  return(
    authRoutes(currentUser)
  )
}

export default withRouter(connect()(GetRoutes))
