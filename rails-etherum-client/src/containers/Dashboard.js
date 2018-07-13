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
      <div className="container">
      	<div className="row">
          <div className="col-md-offset col-md-12 col-lg-offset-3 col-lg-6">
            <div className="well profile">
              <div className="col-sm-12">
                <div className="col-lg-12" align="left">
                  <h1 align="center">Welcome {currentUser.email}</h1>
                  <p><strong>About: </strong></p>
                  <p><strong>Interests: </strong></p>
                  <p><strong>Skills: </strong></p>
                </div>
                <div className="col-xs-12 divider text-center">
                  <div className="col-xs-12 emphasis">
                    <h2><strong>{currentUser.current_contracts.length}</strong></h2>
                    <p>Number of Contracts</p>
                      <div className="btn-group">
                        <button type="button" className="btn btn-danger"><span className="	glyphicon glyphicon-off"></span> Your Contracts </button>
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
