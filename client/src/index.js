import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { ConnectedRouter } from 'react-router-redux'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// import { BrowserRouter as Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import './global-styles'
import App from './App'
import store from './store'

injectTapEventPlugin()
const rootEl = document.getElementById('root')
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const renderedNode = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
)

render(renderedNode, rootEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(renderedNode, rootEl)
  })
}

registerServiceWorker()
