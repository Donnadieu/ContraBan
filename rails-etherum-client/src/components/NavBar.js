import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/actionCreators'
import { bindActionCreators } from 'redux';

const NavBar = (props) => {
  const handleSubmit = () => {
    return props.logoutUser(props.currentUser)
  }
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
  );
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
