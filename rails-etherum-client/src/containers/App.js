import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginForm from '../components/LoginForm'
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
         <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
        <Route exact path="/" component={LoginForm} />
      </div>
    </Router>

    );
  }
}

export default App;
