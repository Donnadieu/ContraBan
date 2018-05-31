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
  console.log(store.getState());
  return(
    <div>
      <Route path="/" component={App}/>
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
