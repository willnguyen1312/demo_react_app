import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import LoaderButton from '../components/LoaderButton'
import './NewNote.css'

class NewNote extends Component {
  constructor(props) {
    super(props)

    this.file = null

    this.state = {
      isLoading: null,
      content: '',
    }
  }

  validateForm() {
    return this.state.content.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleFileChange = event => {
    this.file = event.target.files[0]
  }

  handleSubmit = async event => {
    event.preventDefault()

    if (this.file && this.file.size > 5000000) {
      // eslint-disable-next-line
      alert('Please pick a file smaller than 5MB')
      return
    }

    this.setState({ isLoading: true })
  }

  render() {
    return (
      <div className="NewNote">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>Attachment</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    )
  }
}

export default withRouter(NewNote)
