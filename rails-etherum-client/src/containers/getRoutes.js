import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"
import React from 'react'
import App from './App'
import LoginForm from './LoginForm'

export const getRoutes = (store) =>{
  const state = store.getState();
  return(
    <div>
      <Route exact path="/" />
        <Route path="/login" component={LoginForm}/>
    </div>
  )
}

// const authRequired = (nextState, replaceState) => {
//   debugger
// }
//   if (!state.user.isAuthenticated) {
//     // Not authenticated, redirect to login.
//     replaceState({ nextPathname: nextState.location.pathname }, '/login');
//   }
// };
