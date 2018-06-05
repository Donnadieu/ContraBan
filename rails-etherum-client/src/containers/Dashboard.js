import React, {Component} from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ContractsPage from './ContractPage'

class Dashboard extends Component {
  render() {
    const { currentUser } = this.props
    return(
      <div className="Dashboard">
        <h1>{currentUser.email}</h1>
        <ContractsPage />
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    currentUser: state.currentUser,
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard))
