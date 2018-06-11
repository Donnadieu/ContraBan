import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { withRouter } from 'react-router-dom'
import FileInput from '../components/FileInput'
import { createContract } from '../actions/actionCreators'

const ContractNew = ({values, dispatch, handleSubmit, currentUser}) => {
    const contractInfo = (values, dispatch) => {
      dispatch(createContract(values, currentUser))
    }
    return(
      <div>
        <form onSubmit={handleSubmit(contractInfo)}>
          <div>
            <label><strong>Name</strong></label>
            <br></br>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
          <br></br>
          <div>
            <label><strong>Details</strong></label>
            <br></br>
            <Field
              name="details"
              component="textarea"
              type="text"
              placeholder="Details"
            />
          </div>
          <br></br>
          <div>
            <label><strong>Image</strong></label>
            <br></br>
            <Field
              type="file"
              name="image"
              component={FileInput}
            />
          </div>
          <br></br>
          <button type="submit" label="submit">Signup</button>
        </form>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'ContractNew',
})(ContractNew)))
