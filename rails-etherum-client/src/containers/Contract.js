import React, { Component } from 'react'

class Contract extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
  }
  handleClick = (contractId) => {
    debugger
    return (this.props.history.push(`/dashboard/${this.props.currentUser.id}/contracts/${contractId}`))
  }

  handleChange = () => {
    let likes = this.state.likes + 1
    this.setState({
      likes: likes
    })
  }
  render() {
    const { contract } = this.props
    return (
      <p>{contract.product_name} <button onClick={() => this.handleClick(contract.blockchain_id)}>Show</button><button onClick={() => this.handleChange()}>Like</button> <strong>{this.state.likes}</strong></p>
    )
  }
}

export default Contract
