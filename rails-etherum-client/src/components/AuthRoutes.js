import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom"
import Form from '../containers/Form'
import Dashboard from '../containers/Dashboard'
import ContractShow from './ContractShow'

const AuthRoutes = ({currentUser, location, match}) => {
  const userLoggedIn = currentUser.is_authenticated
  const currentPath = location.pathname
  if (userLoggedIn) {
    return(
      <div>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path={`/dashboard/${currentUser.id}/contracts/:contractId`} component={ContractShow}/>
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
