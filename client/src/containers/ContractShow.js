import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class ContractShow extends Component {
  state = {
    copied: false,
  }
  render(){
    const { contract } = this.props
    return(
      <div align='center'>
        <h1>Certificate of Authenticity</h1>
        <h2>Contract ID: {contract.blockchain_id}</h2>
        <br></br>
        <img src={process.env.PUBLIC_URL + `/uploads/contract/image/${contract.id}/${contract.blockchain_id}.jpg`} alt="logo" height="250" width="250"/>
        <h2>Contract information</h2>
        <p><strong>Price:</strong> ${contract.price}</p>
        <p><strong>Product name: </strong>{contract.product_name}</p>
        <p><strong>Product details: </strong></p>
        <p>{contract.product_info}</p>
        <CopyToClipboard text={window.location.href}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy Link to Clipboard</button>
        </CopyToClipboard>
        {this.state.copied ? <div><span style={{color: 'red'}}>Copied.</span></div> : null}
        <button onClick={()=> window.open(`/contracts/${contract.blockchain_id}/code`, "_blank")}>Generate QR Code</button>
      </div>
    )
  }
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
