import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LoginUser from '../components/LoginUser'
import SignupUser from '../components/SignupUser'

class Form extends Component {
  render() {
    const { location } = this.props
    const renderForm = () => {
      if ( location.pathname === "/login"){
        return (<LoginUser />)
        } else if ( location.pathname === "/signup") {
          return(<SignupUser />)
      }
    }
    return(
      renderForm()
    )
  }
}

export default withRouter(connect()(Form))
