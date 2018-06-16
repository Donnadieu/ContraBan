import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const ContractShow = ({ contract }) => {

  return(
    <div align='center'>
      <h1>Contract ID: {contract.blockchain_id}</h1>
      <img src={process.env.PUBLIC_URL + `/uploads/contract/image/${contract.id}/${contract.blockchain_id}.jpg`} alt="logo" height="250" width="250"/>
      <h2>Contract information</h2>
      <p><strong>Price:</strong> ${contract.price}</p>
      <p><strong>Product name: </strong>{contract.product_name}</p>
      <p><strong>Product details: </strong></p>
      <p>{contract.product_info}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps ) => {
  const contract = state.allContracts.find( contract => contract.blockchain_id === ownProps.match.params.contractId )

  if (contract) {
    return { contract }
  } else {
    return { contract: {} }
  }
}

export default withRouter(connect(mapStateToProps)(ContractShow))
