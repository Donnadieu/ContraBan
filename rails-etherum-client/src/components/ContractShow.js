import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const ContractShow = () => {
  return(
    <h1>This is the contract Page</h1>
  )
}

export default withRouter(connect()(ContractShow))
