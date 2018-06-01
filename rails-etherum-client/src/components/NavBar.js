import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

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
        to="/logout"
        onClick={}
      >
        Log Out
      </NavLink>
    </div>
  );
}

export default NavBar;
