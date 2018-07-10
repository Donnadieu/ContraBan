import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Contract extends Component {
  handleClick = (contractId) => {
    return (this.props.history.push(`/dashboard/${this.props.currentUser.id}/contracts/${contractId}`))
  }
  render() {
    const { contract } = this.props
    return (
      <p>{contract.product_name} <button onClick={() => this.handleClick(contract.blockchain_id)}>Show</button></p>
    )
  }
}

export default withRouter((Contract))
