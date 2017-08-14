// @flow
import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import LoaderButton from '../components/LoaderButton'
import './Login.css'
// import config from '../config.json'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isloading: false,
  }

  props: {
    updateUserToken: Function,
  }

  validateForm = () => this.state.username.length > 0 && this.state.password.length > 0

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  login = (username, password) => {
    const data = JSON.stringify({
      username,
      password,
    })
    return fetch('http://hmsra-gateway.azurewebsites.net/api/authentication/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Entity: 'contact',
      },
      body: data,
    })
      .then(response => response.json())
      .then(result => result.payload)
  }

  handleSubmit = async event => {
    event.preventDefault()

    this.setState({ isLoading: true })

    try {
      const userToken = await this.login(this.state.username, this.state.password)
      this.props.updateUserToken(userToken)
    } catch (e) {
      // eslint-disable-next-line
      alert(e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus value={this.state.username} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
