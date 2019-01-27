import React from 'react'
import {
  Route,
  Redirect,
  withRouter
} from "react-router-dom"
import { connect } from 'react-redux';

const AuthRoutes = ({ component: Component, rest, currentUser }) => (
  <Route
    {...rest}
    render={props =>
      currentUser.is_authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(AuthRoutes))
