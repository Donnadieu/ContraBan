import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReactTable from "react-table"
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';

const ContractOwnerShow = ({ contract }) => {
  var data = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 3, name: 'George Michael', value: '4'}
  ];
  return(
    <div>
      <h1>Contract ID: {contract.blockchain_id}</h1>
      <h2>Contract information</h2>
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
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps ) => {
  const contract = state.allContracts.find( contract => contract.blockchain_id === ownProps.match.params.contractId )
  if (contract) {
    return { contract }
  }else {
    return { contract: {} }
  }
}

export default withRouter(connect(mapStateToProps)(ContractOwnerShow))
