import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import FileInput from '../components/FileInput'
import { createContract } from '../actions/actionCreators'

const ContractNew = ({values, dispatch, handleSubmit, currentUser}) => {
    const contractInfo = (values, dispatch) => {
      dispatch(createContract(values, currentUser))
    }
    const maskMoney = (value) => {
      if (value === null || value === '' || value === undefined) { return '' }
      let v = value.toString().replace(/[^\d.]/g, '')
      v = v.slice(0, v.indexOf('.') >= 0 ? v.indexOf('.') + 3 : undefined)
      return parseFloat(v)
    }
    return(
      <div>
        <form onSubmit={handleSubmit(contractInfo)}>
          <div>
            <Field
              name="name"
              component={renderField}
              type="text"
              placeholder="Name"
              label="Name"
            />
          </div>
          <br></br>
          <div>
            <Field
              name="details"
              component={renderTextarea}
              type="text"
              placeholder="Details"
              label="Details"
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
          <div>
            <label><strong>Price</strong></label>
            <br></br>
            <Field
              name="price"
              component={renderField}
              type="number"
              placeholder="Price"
              normalize={maskMoney}
            />
          </div>
          <br></br>
          <button type="submit" label="submit">Deploy</button>
        </form>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.details) {
    errors.details = 'Required'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <strong><label>{label}</label></strong>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
const renderTextarea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <strong><label>{label}</label></strong>
    <div>
      <textarea {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'ContractNew',
  validate
})(ContractNew)))
