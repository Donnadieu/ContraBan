import React from 'react'

const ContractsList = ({userContracts}) => {

  const renderContracts = userContracts.map(contract =>
    <li key={contract.id}>{contract.blockchain_id}</li>
  )

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

export default ContractsList
