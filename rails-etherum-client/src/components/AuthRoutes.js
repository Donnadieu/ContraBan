import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom"
import Form from '../containers/Form'

const AuthRoutes = ({currentUser, location}) => {
  const userLoggedIn = currentUser.is_authenticated
  const currentPath = location.pathname

  if (userLoggedIn) {
    if (currentPath === '/dashboard') {
      return <Route path="/dashboard" render={() => <h1>{currentUser.email}</h1>} />
    }else {
      return  <Redirect to='/dashboard'/>
    }
  }else {
    if (currentPath === '/login') {
      return <Route exact path="/login" component={Form} />
    } else if (currentPath === '/signup') {
      return <Route exact path="/signup" component={Form} />
    }
    return <Redirect to='/login'/>
  }
}

export default AuthRoutes
