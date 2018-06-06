import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const ContractShow = ({ contract }) => {
  return(
    <h1>This is the contract page</h1>
  )
}

const mapStateToProps = (state, ownProps ) => {
  const contract = state.allContracts.find( contract => contract.blockchain_id === ownProps.match.params.contractId )
  if (contract) {
    return { contract }
  }else {
    return { contract: {} }
  }
}

export default withRouter(connect(mapStateToProps)(ContractShow))
