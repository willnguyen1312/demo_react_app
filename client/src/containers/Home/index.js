import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import HomeWrapper from './Wrapper'

// eslint-disable-next-line
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          <div>
            <Link to="/login" className="btn btn-info btn-lg">
              Login
            </Link>
            <Link to="/signup" className="btn btn-success btn-lg">
              Signup
            </Link>
          </div>
        </div>
      </HomeWrapper>
    )
  }
}

export default withRouter(Home)
