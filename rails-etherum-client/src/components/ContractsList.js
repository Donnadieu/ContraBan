import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const ContractsList = ({userContracts, currentUser, history}) => {
  const handleClick = (contractId) => {
    return (history.push(`/dashboard/${currentUser.id}/contracts/${contractId}`))
  }

  const renderContracts = userContracts.map(contract => {
    return(
      <li key={contract.id}>{contract.blockchain_id} <button onClick={() => handleClick(contract.blockchain_id)}>Show</button></li>
    )
})

  return(
    <div>
      <h2>Your current Contracts</h2>
      <button>Create a New Contract</button>
      <ol>
        {renderContracts}
      </ol>
    </div>
  )
}

export default withRouter(connect()(ContractsList))
