import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom"
import React from 'react'
import { connect } from 'react-redux';
import AuthRoutes from './AuthRoutes'
import Dashboard from '../containers/Dashboard'
import ContractOwnerShow from './ContractOwnerShow'
import ContractShow from './ContractShow'
import RegistrationForm from '../containers/RegistrationForm'
import ContractNew from '../containers/ContractNew'
import AuthContract from './AuthContract'

const GetRoutes = ({currentUser, location, match}) =>{
  const renderIf = (currentUser) => {
    if (currentUser.is_authenticated) {
      return(
        <Switch>
          <Redirect from="/" exact to="/dashboard"/>
          <Redirect from="/login" to="/dashboard"/>
          <Redirect from="/signup" to="/dashboard"/>
          <AuthRoutes exact path="/dashboard" component={Dashboard}  currentUser={currentUser} />
          <AuthRoutes exact path={`/dashboard/${currentUser.id}/contracts/new`} component={ContractNew} currentUser={currentUser}/>
          <AuthContract exact path={`/dashboard/${currentUser.id}/contracts/:contractId`} component={ContractOwnerShow} currentUser={currentUser}/>
          <Route exact path={`/contracts/:contractId`} component={ContractShow} currentUser={currentUser}/>
        </Switch>
      )
    }else {
      return(
        <Switch>
          <Redirect from="/" exact to="/login"/>
          <Redirect from="/dashboard" exact to="/login"/>
          <Route exact path="/login" component={RegistrationForm}/>
          <Route exact path="/signup" component={RegistrationForm}/>
        </Switch>
      )
    }
  }
  return(
    renderIf(currentUser)
  )
}

export default withRouter(connect()(GetRoutes))
