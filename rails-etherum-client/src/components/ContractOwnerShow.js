import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReactTable from "react-table"
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';

const ContractOwnerShow = ({ contract }) => {
  var data = [
    {id:1, name: `${contract.product_name}`, price: '2'},
    {id:2, name: `${contract.product_name}`, price: '5'},
    {id:3, name: `${contract.product_name}`, price: '4'}
  ];
  return(
    <div>
      <h1>Contract ID: {contract.blockchain_id}</h1>
      <h2>Contract information</h2>
      <p><strong>Price:</strong> ${contract.histories[contract.histories.length - 1].price}</p>
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
  const contract = state.currentUser.contracts.find( contract => contract.blockchain_id === ownProps.match.params.contractId )
  if (contract) {
    return { contract }
  }else {
    return { contract: {} }
  }
}

export default withRouter(connect(mapStateToProps)(ContractOwnerShow))
