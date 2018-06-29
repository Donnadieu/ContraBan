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
      <p>{contract.product_name} <button onClick={() => this.handleClick(contract.blockchain_id)}>Show</button><button onClick={ likeContract }>Like</button> <strong>{contract.likes}</strong></p>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    likeContract: () => dispatch(likeContract(ownProps.contract, ownProps.currentUser))
  })
}

export default withRouter(connect(null, mapDispatchToProps)(Contract))
