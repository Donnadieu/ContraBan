import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { QRCode } from 'react-qr-svg';

const QRcode = ({contract}) => {
  return(
    <div align="center">
      <h2>Here is your Code</h2>
      <QRCode value={window.location.href.split("/")[0] + "//" + window.location.href.split("/")[2] + "/contracts/" + contract.blockchain_id} style={{ width: 256 }}/>
    </div>
  )
}

const mapStateToProps = (state, ownProps ) => {
  const contract = state.allContracts.find( contract => contract.blockchain_id === ownProps.match.params.contractId )

  if (contract) {
    return { contract }
  } else {
    return { contract: {} }
  }
}

export default withRouter(connect(mapStateToProps)(QRcode))
