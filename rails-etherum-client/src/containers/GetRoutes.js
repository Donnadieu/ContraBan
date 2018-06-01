import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import React from 'react'
import LoginForm from './LoginForm'

export const GetRoutes = ({currentUser}) =>{
  const userLoggedIn = currentUser.is_authenticated
  const authRoutes = () => {
    console.log(userLoggedIn);
    if (userLoggedIn) {
      return (
        <div>
          <Redirect from="/" to="/dashboard"/>
          <Route path="/dashboard" component={() => <h1>{currentUser.email}</h1>} />
        </div>
      )
    } else {
      return (
        <Route exact path="/login" component={LoginForm} />
      )
    }
  }
  return(
    <div>
      {authRoutes()}
    </div>
  )
}
