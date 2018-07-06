import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import WelcomeForm from './components/WelcomeForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <WelcomeForm/>
      </div>
    );
  }
}

export default withRouter(App)
