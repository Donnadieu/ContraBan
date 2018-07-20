import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { fetchContracts } from '../actions/actionCreators'
import Contract from '../containers/Contract'

const ContractsList = ({contracts, currentUser, history, location}) => {
  const renderContracts = contracts.map(contract => {
    return(
      <li key={contract.id}>
        <Contract contract={contract} history={history} currentUser={currentUser}/>
      </li>
    )
  })

  return(
    <div>
      {location.pathname === "/dashboard" && <h1>Your Contracts</h1>}
      <ul>
        {renderContracts}
      </ul>
    </div>
  )
}

const mapStateToProps = (state, match) => {
  if (match.location.pathname === "/dashboard") {
    return{
      currentUser: state.currentUser,
      contracts: state.currentUser.current_contracts
    }
  } else {
    return{
      currentUser: state.currentUser,
      contracts: state.allContracts
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchContracts
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContractsList))
