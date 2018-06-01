import React, {Component} from 'react'
import { connect } from 'react-redux';
import './App.css';
import {GetRoutes} from '../containers/GetRoutes'

class App extends Component {
  render() {
    return(
      <div className="App">
        <GetRoutes currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(App)
