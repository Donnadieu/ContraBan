import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { fetchContracts } from '../actions/actionCreators'

const ContractsList = ({contracts, currentUser, history, location}) => {
  const handleClick = (contractId) => {
    return (history.push(`/dashboard/${currentUser.id}/contracts/${contractId}`))
  }

  const renderContracts = contracts.map(contract => {
    return(
      <li key={contract.id}>
        {contract.product_name} <button onClick={() => handleClick(contract.blockchain_id)}>Show</button>
      </li>
    )
})

  return(
    <div>
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
