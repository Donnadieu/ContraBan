import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'

class ContractNew extends Component {
  render() {
      return(
        <div align="center">
            <form>
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
            <button type="submit" label="submit">Signup</button>
          </form>
        </div>
      )
    }
}

export default withRouter(connect()(reduxForm({
  form: 'ContractNew',
})(ContractNew)))
