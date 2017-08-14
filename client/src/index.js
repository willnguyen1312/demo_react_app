import React from 'react'
import { render } from 'react-dom'
import 'sanitize.css/sanitize.css'
import 'bootstrap/dist/css/bootstrap.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './global-styles'
import App from './App'

injectTapEventPlugin()
const rootEl = document.getElementById('root')

render(
  <Router>
    <App />
  </Router>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <Router>
        <App />
      </Router>,
      rootEl,
    )
  })
}

registerServiceWorker()
