import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import QRCode from 'qrcode.react';

const QRcode = ({contract, self}) => {
  const handleClick = (event) => {
    let canvas = event.currentTarget
    var link = document.createElement('a')
    link.download = `${contract.blockchain_id}`
    link.href = canvas.toDataURL("image/png;base64")
    link.click()
  }
  return(
    <div align="center" >
      <h2>Click on Code to Download</h2>
      <br></br>
      <QRCode size={200} onClick={(event) => handleClick(event)} value={window.location.href.split("/")[0] + "//" + window.location.href.split("/")[2] + "/contracts/" + contract.blockchain_id}/>
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
