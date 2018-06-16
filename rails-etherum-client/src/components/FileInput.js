import React from 'react'
import { withRouter } from 'react-router-dom'

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    return (<input
      type="file"
      onChange={this.onChange}
    />)
  }
}

export default withRouter(FileInput)
