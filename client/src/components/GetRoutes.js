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
import RegistrationForm from '../containers/RegistrationForm'
import ContractNew from '../containers/ContractNew'
import ContractsList from './ContractsList'
import QRcode from "./QRcode"
import ContractPage from '../containers/ContractPage'

const GetRoutes = ({currentUser, location, match}) =>{
  const renderIf = (currentUser) => {
    if (currentUser.is_authenticated) {
      return(
        <Switch>
          <Redirect from="/" exact to="/dashboard"/>
          <Redirect from="/login" to="/dashboard"/>
          <Redirect from="/signup" to="/dashboard"/>
          <AuthRoutes exact path="/dashboard" component={Dashboard} />
          <AuthRoutes exact path={`/contracts/new`} component={ContractNew}/>
          <Route exact path='/contracts' component={ContractsList}/>
          <Route exact path={`/contracts/:contractId`} component={ContractPage}/>
          <Route exact path={`/contracts/:contractId/code`} component={QRcode}/>
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
