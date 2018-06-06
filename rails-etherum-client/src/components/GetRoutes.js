import {
  Switch,
  Route
} from "react-router-dom"
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import AuthRoutes from './AuthRoutes'
import Dashboard from '../containers/Dashboard'
import ContractShow from './ContractShow'
import Form from '../containers/Form'

const GetRoutes = ({currentUser, location, match}) =>{
  return(
    <div>
      <Switch>
        <Route exact path="/login" component={Form}/>
        <AuthRoutes path="/dashboard" component={Dashboard}  currentUser={currentUser} />
      </Switch>
    </div>
  )
}

export default withRouter(connect()(GetRoutes))
