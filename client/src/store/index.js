import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
// import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
// import { Iterable } from 'immutable'
import api from '../middleware/api'

import createGlobalReducer from '../global-reducer'
import globalSagas from '../global-sagas'

// const stateTransformer = state => {
//   if (Iterable.isIterable(state)) return state.toJS()
//   return state
// }

// const logger = createLogger({
//   stateTransformer,
// })
export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  api,
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  sagaMiddleware,
]

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(

const store = createStore(createGlobalReducer(), composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(globalSagas)

export default store
