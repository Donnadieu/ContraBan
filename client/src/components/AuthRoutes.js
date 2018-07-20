import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom"

const AuthRoutes = ({ component: Component, ...rest, currentUser }) => (
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

export default AuthRoutes
