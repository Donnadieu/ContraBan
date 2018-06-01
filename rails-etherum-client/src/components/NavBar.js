import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/actionCreators'

const NavBar = () => {
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
        to="/"
      >
        Log Out
      </NavLink>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  debugger
  return({
      handleClick: () => {
        dispatch(logoutUser())
      }
  })
}

export default connect(mapDispatchToProps)(NavBar)
