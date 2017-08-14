import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line
    // const NextApp = require('./App').default
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      rootEl,
    )
  })
}

registerServiceWorker()
