import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ContractsList from '../components/ContractsList'

class ContractsPage extends Component {
  render() {
    const {userContracts, currentUser} = this.props
    return(
      <div>
        <ContractsList userContracts={userContracts} currentUser={currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    currentUser: state.currentUser,
    userContracts: state.currentUser.current_contracts
  }
}

export default withRouter(connect(mapStateToProps)(ContractsPage))
