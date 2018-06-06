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
    const { currentUser } = this.props
    return(
      <div className="Dashboard">
        <h1>Welcome {currentUser.email}</h1>
        <ContractsPage />
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
