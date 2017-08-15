import { createReducer } from 'redux-create-reducer'
import { Map } from 'immutable'

const QUOTE_REQUEST = state => state.set('isFetching', true)
// Object.assign({}, state, {
//   isFetching: true,
// })

const QUOTE_SUCCESS = (state, action) =>
  state
    .set('isFetching', false)
    .set('quote', action.quote)
    .set('authenticated', action.authenticated || false)
// Object.assign({}, state, {
//   isFetching: false,
//   quote: action.response,
//   authenticated: action.authenticated || false,
// })

const QUOTE_FAILURE = state => state.set('isFetching', false)
// Object.assign({}, state, {
//   isFetching: false,
// })

const initStateQuotes = Map({
  isFetching: false,
  quote: '',
  authenticated: false,
})

const quotes = createReducer(initStateQuotes, {
  QUOTE_REQUEST,
  QUOTE_SUCCESS,
  QUOTE_FAILURE,
})

export default quotes
