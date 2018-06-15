import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReactTable from "react-table"
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table'
import TransferContract from '../containers/TransferContract'

const ContractOwnerShow = ({ contract }) => {
  var data = [
    {id:1, name: `${contract.product_name}`, price: '2'},
    {id:2, name: `${contract.product_name}`, price: '5'},
    {id:3, name: `${contract.product_name}`, price: '4'}
  ];
  return(
    <div align='center'>
      <h1>Contract ID: {contract.blockchain_id}</h1>
      <img src={process.env.PUBLIC_URL + `/uploads/contract/image/${contract.id}/${contract.blockchain_id}.jpg`} alt="logo" height="250" width="250"/>
      <TransferContract contract={contract} />
      <h2>Contract information</h2>
      <p><strong>Price:</strong> ${contract.price}</p>
      <p><strong>Product name: </strong>{contract.product_name}</p>
      <p><strong>Product details: </strong></p>
      <p>{contract.product_info}</p>

      <h3>History</h3>
      <div>
        <BootstrapTable data={data}>
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'>
            Price
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps ) => {
  const userContract = state.currentUser.current_contracts.find( contract => contract.blockchain_id === ownProps.match.params.contractId )
  const contract = state.allContracts.find( contract => contract.blockchain_id === ownProps.match.params.contractId )

  if (userContract) {
    return { contract: userContract }
  } else {
    return { contract: {} }
  }
}

export default withRouter(connect(mapStateToProps)(ContractOwnerShow))
