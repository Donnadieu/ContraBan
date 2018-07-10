import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { likeContract } from '../actions/actionCreators'

class Contract extends Component {
  handleClick = (contractId) => {
    return (this.props.history.push(`/dashboard/${this.props.currentUser.id}/contracts/${contractId}`))
  }
  render() {
    const { contract, likeContract } = this.props
    return (
      <p>{contract.product_name} <button onClick={() => this.handleClick(contract.blockchain_id)}>Show</button></p>
    )
  }
}

export default withRouter((Contract))
