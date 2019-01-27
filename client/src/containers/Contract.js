import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUrlToContract } from '../actions/actionCreators'
import { bindActionCreators } from 'redux'

class Contract extends Component {
  handleClick = () => {
    this.props.addUrlToContract(this.props.contract)
  }
  render() {
    const { contract } = this.props
    return (
      <p>{contract.product_name} <button onClick={() => this.handleClick(contract.blockchain_id)}>Show</button></p>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    addUrlToContract
  }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(Contract))
