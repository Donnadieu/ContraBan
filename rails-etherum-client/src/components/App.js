import React, { Component } from 'react';
import LoginForm from '../containers/LoginForm'
import '../App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
        <LoginForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default App
