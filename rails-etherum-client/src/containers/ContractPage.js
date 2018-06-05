import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ContractsList from '../components/ContractsList'

class ContractsPage extends Component {
  render() {
    const {userContracts} = this.props
    return(
      <ContractsList userContracts={userContracts}/>
    )
  }
}

const mapStateToProps = function(state){
  return {
    userContracts: state.currentUser.contracts
  }
}

export default withRouter(connect(mapStateToProps)(ContractsPage))
