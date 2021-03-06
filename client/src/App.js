import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import RouteNavItem from './components/RouteNavItem'
import Routes from './Routes'
import AppWrapper from './AppWrapper'

class App extends Component {
  state = {
    userToken: null,
    isLoadingUserToken: true,
  }
  props: {
    history: any,
  }
  updateUserToken = userToken => {
    this.setState({
      userToken,
    })
  }
  handleNavLink = event => {
    event.preventDefault()
    this.props.history.push(event.currentTarget.getAttribute('href'))
  }

  handleLogout = () => {
    this.updateUserToken(null)
    this.props.history.push('/login')
  }
  render() {
    const childProps = {
      userToken: this.state.userToken,
      updateUserToken: this.updateUserToken,
    }
    return (
      <AppWrapper>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.userToken
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : [
                  <RouteNavItem key={1} onClick={this.handleNavLink} href="/signup">
                      Signup
                  </RouteNavItem>,
                  <RouteNavItem key={2} onClick={this.handleNavLink} href="/login">
                      Login
                  </RouteNavItem>,
                ]}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </AppWrapper>
    )
  }
}

export default withRouter(App)
