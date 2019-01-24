import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import ImageUpload from '../components/ImageUpload'
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
      <div className="center-container">
    		<div className="main">
    			<h1 className="w3layouts_head">Create a New Contract</h1>
    				<div className="w3layouts_main_grid">
    					<form onSubmit={handleSubmit(contractInfo)} className="w3_form_post">
    						<div className="w3_agileits_main_grid w3l_main_grid">
    							<span className="agileits_grid">
                    <Field
                      name="name"
                      component={renderField}
                      type="text"
                      placeholder="Name"
                      label="Name"
                    />
    							</span>
    						</div>
    						<div className="w3_agileits_main_grid w3l_main_grid">
    							<span className="agileits_grid">
                    <Field
                      name="details"
                      component={renderTextarea}
                      type="text"
                      placeholder="Details"
                      label="Details"
                    />
    							</span>
    						</div>
    						<div className="w3_agileits_main_grid w3l_main_grid">
    							<span className="agileits_grid">
                    <label><strong>Image</strong></label>
                    <Field
                      type="file"
                      name="image"
                      component={ImageUpload}
                    />
    							</span>
    						</div>
    						<div className="w3_agileits_main_grid w3l_main_grid">
    							<span className="agileits_grid">
                    <label><strong>Price</strong></label>
                    <Field
                      name="price"
                      component={renderField}
                      type="number"
                      placeholder="Price"
                      normalize={maskMoney}
                    />
    							</span>
    						</div>
    					<div className="w3_main_grid">
    						<div className="w3_main_grid_right">
    							<input type="submit" value="Submit"></input>
    						</div>
    					</div>
    				</form>
    			</div>
    		</div>
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
      {touched && ((error && <span><strong>{error}</strong></span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'ContractNew',
  validate
})(ContractNew)))
