import React, { Component } from 'react';
import LoginForm from '../containers/LoginForm'
import {login} from '../actions'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
        <LoginForm onSubmit={login}/>
      </div>
    )
  }
}

export default App
