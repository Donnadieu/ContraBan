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
    return(
      <div>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path={`/dashboard/${currentUser.id}/contracts/:contractId`} component={() => <h1>This is the contract page</h1>}/>
      </div>
    )
  } else {
    return(
      <div>
        <Route path="/login" component={Form} />
        <Route path="/signup" component={Form} />
      </div>
    )
  }
}

export default AuthRoutes
