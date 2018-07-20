import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

const NavBar = ({currentUser, logoutUser}) => {
  const handleSubmit = () => {
    return logoutUser(currentUser)
  }

  const renderLinks = (currentUser) => {
    if (currentUser.is_authenticated) {
      return (
        <nav className="navbar navbar-default">
          <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                  <li>
                    <NavLink
                      to="/dashboard"
                    >
                    DASHBOARD
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contracts"
                    >
                    CONTRACTS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      onClick={handleSubmit}
                    >
                    LOG OUT
                    </NavLink>
                  </li>
              </ul>
          </div>
        </nav>

      )
    } else {
      return(
        <nav className="navbar navbar-default">
        </nav>
      )
    }
  }
  return (
    renderLinks(currentUser)
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser,
  }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(NavBar))
