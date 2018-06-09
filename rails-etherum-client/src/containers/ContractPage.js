import React, {Component} from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ContractsList from '../components/ContractsList'

class ContractsPage extends Component {
  render() {
    const {userContracts, currentUser, history} = this.props

    const handleClick = () => {
      return (history.push(`/dashboard/${currentUser.id}/contracts/new`))
    }
    return(
      <div>
        <button onClick={() => handleClick()}>Create a New Contract</button>
        <ContractsList userContracts={userContracts} currentUser={currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    currentUser: state.currentUser,
    userContracts: state.currentUser.contracts
  }
}

export default withRouter(connect(mapStateToProps)(ContractsPage))
