import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { transferContract } from '../actions/actionCreators'

const TransferContract = ({values, dispatch, handleSubmit, currentUser, contract}) => {
    const transferInfo = (values, dispatch) => {
      dispatch(transferContract(values, currentUser, dispatch, contract))
    }
    const maskMoney = (value) => {
      if (value === null || value === '' || value === undefined) { return '' }
      let v = value.toString().replace(/[^\d.]/g, '')
      v = v.slice(0, v.indexOf('.') >= 0 ? v.indexOf('.') + 3 : undefined)
      return parseFloat(v)
    }
    return(
      <div>
        <h2>Transfer</h2>
        <form onSubmit={handleSubmit(transferInfo)}>
          <div>
            <label><strong>Email</strong></label>
            <br></br>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
            />
          </div>
          <br></br>
          <div>
            <label><strong>Transfer Price</strong></label>
            <br></br>
            <Field
              name="price"
              component="input"
              type="number"
              placeholder="Price"
              normalize={maskMoney}
            />
          </div>
          <br></br>
          <button type="submit" label="submit">Transfer Ownership</button>
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
  form: 'TransferContract',
  transferContract
})(TransferContract)))
