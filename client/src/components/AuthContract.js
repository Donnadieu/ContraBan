import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom"

const AuthRoutes = ({ component: Component, rest, currentUser, location }) => {
  const isUserOwner = (currentUser, location) => {
    const contract = currentUser.current_contracts.find( contract => contract.blockchain_id === location.pathname.split("/")[4])
    return !(contract === undefined || contract === null)
  }

  return(
    <Route
      {...rest}
      render={props =>
        isUserOwner(currentUser, location) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `/contracts/${location.pathname.split("/")[4]}`,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default AuthRoutes
