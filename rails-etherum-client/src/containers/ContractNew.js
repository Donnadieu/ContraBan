import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import FileInput from '../components/FileInput'

class ContractNew extends Component {
  render() {
      return(
        <div>
          <form>
            <div>
              <label><strong>Name of the Collectable</strong></label>
              <br></br>
              <Field
                name="Name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <br></br>
            <div>
              <Field
                type="file"
                name="poster"
                component={FileInput}
              />
            </div>
            <br></br>
            <button type="submit" label="submit">Signup</button>
          </form>
        </div>
      )
    }
}

export default withRouter(connect()(reduxForm({
  form: 'ContractNew',
})(ContractNew)))
