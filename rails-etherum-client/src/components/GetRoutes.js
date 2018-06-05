import {
  Switch
} from "react-router-dom"
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import AuthRoutes from './AuthRoutes'

const GetRoutes = ({currentUser, location}) =>{
  return(
    <div>
      <Switch>
        <AuthRoutes currentUser={currentUser} location={location}/>
      </Switch>
    </div>
  )
}

export default withRouter(connect()(GetRoutes))
