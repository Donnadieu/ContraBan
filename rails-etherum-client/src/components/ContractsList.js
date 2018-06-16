import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const ContractsList = ({contracts, currentUser, history, location}) => {
  // debugger
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
      contracts: state.currentUser.current_contracts
    }
  } else {
    return{
      contracts: state.allContracts
    }
  }
}

export default withRouter(connect(mapStateToProps)(ContractsList))
