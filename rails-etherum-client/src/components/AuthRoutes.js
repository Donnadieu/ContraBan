import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom"
import Form from '../containers/Form'
import Dashboard from '../containers/Dashboard'

const AuthRoutes = ({currentUser, location, match}) => {
  const userLoggedIn = currentUser.is_authenticated
  const currentPath = location.pathname
  if (userLoggedIn) {
    if (currentPath === '/dashboard') {
      return (
        <div>
          <Route path="/dashboard" component={Dashboard} />
        </div>
      )
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
