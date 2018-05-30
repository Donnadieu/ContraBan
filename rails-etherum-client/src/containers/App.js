import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"
import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import LoginForm from '../components/LoginForm'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={LoginForm} />
        </div>
      </Router>
    );
  }
}

export default App;
