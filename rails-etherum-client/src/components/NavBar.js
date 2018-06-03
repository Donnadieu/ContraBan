import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/actionCreators'
import { bindActionCreators } from 'redux';

const NavBar = ({currentUser, logoutUser}) => {
  const handleSubmit = () => {
    return logoutUser(currentUser)
  }

  const renderLinks = (currentUser) => {
    if (currentUser.is_authenticated) {
      return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/login"
            onClick={handleSubmit}
          >
            Log Out
          </NavLink>
        </div>
      )
    } else {
      return(
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <NavLink
            style={{ marginRight: '10px' }}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </div>
      )
    }
  }
  return (
    renderLinks(currentUser)
  )
}

const mapStateToProps = function(state){
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
