import React, {Component} from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { fetchContracts, toggleContracts } from '../actions/actionCreators'
import { Link } from 'react-router-dom'
import ContractsList from '../components/ContractsList'

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchContracts()
  }
  handleClick = (e) => {
    return (this.props.history.push(e.target.attributes.href.value))
  }
  renderContracts = () => {
    this.props.toggleContracts()
  }
  render() {
    const { currentUser, isHidden } = this.props
    return(
      <div className="container">
      	<div className="row">
          <div className="col-md-offset col-md-12 col-lg-offset-3 col-lg-6">
            <div className="well profile">
              <div className="col-sm-12">
                <div className="col-lg-12" align="left">
                  <h1 align="center">Welcome {currentUser.email}</h1>
                </div>
                <div className="col-xs-12 divider text-center">
                  <div className="col-xs-12 emphasis">
                    <h2><strong>{currentUser.current_contracts.length}</strong></h2>
                    <p>Number of Contracts</p>
                      <div className="dropdown">
                        <button type="button" className="btn btn-danger" onClick={ () => this.renderContracts()}><span className="	glyphicon glyphicon-off"></span> My Contracts </button>
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to={`/contracts/new`} >New Contract</Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {(isHidden === false)&& <ContractsList/>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    isHidden: !state.currentUser.isHidden
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchContracts, toggleContracts
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
