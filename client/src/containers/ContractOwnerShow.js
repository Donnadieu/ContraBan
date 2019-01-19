import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table'
import TransferContract from '../containers/TransferContract'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class ContractOwnerShow extends Component {
  state = {
    copied: false
  }
  render(){
    const { contract } = this.props
    let data = []

    if(contract.histories !== undefined){
      data = contract.histories.map( history => Object.assign({}, history))
      for (let i = 0; i < data.length; i++) {
          data[i].id = i + 1
      }
    }

    function priceFormatter(cell, row) {
      return `$${cell}`;
    }
    return(
      <div align='center'>
        <h1>Contract ID: {contract.blockchain_id}</h1>
        <img src={require(`../contracts/${contract.blockchain_id}.jpg`)} alt="logo" height="250" width="250"/>
        <TransferContract contract={contract} />
        <h2>Contract information</h2>
        <p><strong>Price:</strong> {contract.price}</p>
        <p><strong>Product name: </strong>{contract.product_name}</p>
        <p><strong>Product details: </strong></p>
        <p>{contract.product_info}</p>
        <CopyToClipboard text={window.location.href.split("/")[0] + "//" + window.location.href.split("/")[2] + "/contracts/" + window.location.href.split("/")[window.location.href.split("/").length - 1]}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy Link to Clipboard</button>
        </CopyToClipboard>
        {this.state.copied ? <div><span style={{color: 'red'}}>Copied.</span></div> : null}
        <button onClick={()=> window.open(`/contracts/${contract.blockchain_id}/code`, "_blank")}>Generate QR Code</button>

        <h3>History</h3>
        <div>
          {data !== [] ? <h4>No Transfers Have Been Made</h4> :   <BootstrapTable data={ data }>
                                                                    <TableHeaderColumn isKey dataField='id'>Transfer ID</TableHeaderColumn>
                                                                    <TableHeaderColumn dataField='transfer_price' dataFormat={priceFormatter}>Transfer Price</TableHeaderColumn>
                                                                  </BootstrapTable>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps ) => {
  const contractId = ownProps.location.pathname.split("/")[ownProps.location.pathname.split("/").length - 1]
  const userContract = state.currentUser.current_contracts.find( contract => contract.blockchain_id === contractId )

  if (userContract) {
    return { contract: userContract }
  } else {
    return { contract: {} }
  }
}

export default withRouter(connect(mapStateToProps)(ContractOwnerShow))
