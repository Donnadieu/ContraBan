import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginUser from '../containers/LoginUser'
import SignupUser from '../containers/SignupUser'

const WelcomeForm = props => {
  if (props.location.pathname === "/login") {
    return (<LoginUser />)
  } else if (props.location.pathname === "/signup") {
    return (<SignupUser />)
  }
}

export default withRouter(WelcomeForm)
