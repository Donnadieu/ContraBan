import React, {Component} from 'react'
import { connect } from 'react-redux';
import './App.css';
import GetRoutes from '../components/GetRoutes'
import NavBar from '../components/NavBar';
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <div className="App">
        <NavBar currentUser={this.props.currentUser}/>
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

export default withRouter(connect(mapStateToProps)(App))
