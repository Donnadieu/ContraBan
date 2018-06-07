import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import AuthRoutes from './AuthRoutes'
import Dashboard from '../containers/Dashboard'
import ContractOwnerShow from './ContractOwnerShow'
import Form from '../containers/Form'

const GetRoutes = ({currentUser, location, match}) =>{
  const renderIf = (currentUser) => {
    if (currentUser.is_authenticated) {
      return(
        <Switch>
          <Redirect from="/login" to="/dashboard"/>
          <Redirect from="/signup" to="/dashboard"/>
          <AuthRoutes exact path="/dashboard" component={Dashboard}  currentUser={currentUser} />
          <AuthRoutes exact path={`/dashboard/${currentUser.id}/contracts/:contractId`} component={ContractOwnerShow} currentUser={currentUser}/>
        </Switch>
      )
    }else {
      return(
        <Switch>
          <Route exact path="/login" component={Form}/>
          <Route exact path="/signup" component={Form}/>
        </Switch>
      )
    }
  }
  return(
    renderIf(currentUser)
  )
}

export default withRouter(connect()(GetRoutes))
