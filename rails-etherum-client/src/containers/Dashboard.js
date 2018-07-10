import React, {Component} from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ContractsPage from './ContractPage'
import { bindActionCreators } from 'redux';
import { fetchContracts } from '../actions/actionCreators'

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchContracts(this.props.currentUser)
  }
  render() {
    const { currentUser, history } = this.props
    const handleClick = () => {
      return (history.push(`/dashboard/${currentUser.id}/contracts/new`))
    }
    return(
      <div class="container">
        <div class="row">
          <h1>Welcome {currentUser.email}</h1>
          <button onClick={handleClick}>Create a New Contract</button>
          <h2>Your current Contracts</h2>
          <ContractsPage />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchContracts
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
