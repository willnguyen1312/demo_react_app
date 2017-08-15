import { createReducer } from 'redux-create-reducer'
// eslint-disable-next-line
import Immutable, { Map } from 'immutable'

/**
 * 
 * @param {Immutable.Map} state 
 */
const LOGIN_REQUEST = state => state.set('isFetching', true).set('isAuthenticated', false)
// Object.assign({}, state, {
//   isFetching: true,
//   isAuthenticated: false,
// })

/**
 * 
 * @param {Immutable.Map} state 
 */
const LOGIN_SUCCESS = state => state.set('isFetching', false).set('isAuthenticated', true)
// Object.assign({}, state, {
//   isFetching: false,
//   isAuthenticated: true,
//   errorMessage: '',
// })

/**
 * 
 * @param {Immutable.Map} state 
 */
const LOGIN_FAILURE = (state, action) =>
  state.set('isFetching', false).set('isAuthenticated', false).set('errorMessage', action.message)
// Object.assign({}, state, {
//   isFetching: false,
//   isAuthenticated: false,
//   errorMessage: action.message,
// })

/**
 * 
 * @param {Immutable.Map} state 
 */
const LOGOUT_SUCCESS = state => state.set('isFetching', true).set('isAuthenticated', false)
// Object.assign({}, state, {
//   isFetching: true,
//   isAuthenticated: false,
// })

const initAuthState = Map({
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('access_token'),
  errorMessage: '',
})

const auth = createReducer(initAuthState, {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
})

export default auth
