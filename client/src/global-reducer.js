/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { Map } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form/immutable'
import loginReducer from './containers/Login/reducer'
// Initial routing state
const routeInitialState = Map({
  location: null,
})

// const containersReducer = {
//   containers: combineReducers({
//     loginReducer,
//     // NOTE: put other app reducers here
//   }),
// }

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      })
    default:
      return state
  }
}
// import appReducer from './containers/App/reducer'

// const containersReducer = {
//   containers: combineReducers(
//     {
//       // appReducer,
//       // NOTE: put other app reducers here
//     },
//   ),
// }

const createGlobalReducer = () =>
  combineReducers({
    // ...containersReducer,
    login: loginReducer,
    form: reduxFormReducer,
    route: routeReducer,
  })

export default createGlobalReducer
