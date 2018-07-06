import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  if (true) {
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
                    to="/settings"
                  >
                  SETTINGS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
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
      null
    )
  }
}

export default Navbar
