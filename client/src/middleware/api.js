// const BASE_URL = 'https://hmsra-gateway.azurewebsites.net/api/'
const BASE_URL = 'http://localhost:3001/api/'

function callApi(endpoint, authenticated) {
  const token = localStorage.getItem('access_token') || null
  let config = {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Entity: 'contact',
    },
  }

  if (authenticated) {
    if (token) {
      config = {
        headers: { ...config.headers, Authorization: `Bearer ${token}` },
      }
    } else {
      // eslint-disable-next-line
      throw 'No token saved!'
    }
  }

  return fetch(BASE_URL + endpoint, config)
    .then(response => response.text().then(text => ({ text, response })))
    .then(({ text, response }) => {
      if (!response.ok) {
        return Promise.reject(text)
      }

      return text
    })
    .catch(err => console.log(err))
}

export const CALL_API = Symbol('Call API')

// eslint-disable-next-line
export default store => next => action => {
  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { endpoint, types, authenticated } = callAPI

  // eslint-disable-next-line
  const [requestType, successType, errorType] = types

  // Passing the authenticated boolean back in our data will let
  // us distinguish between normal and secret quotes
  return callApi(endpoint, authenticated).then(
    quote =>
      next({
        quote,
        authenticated,
        type: successType,
      }),
    error =>
      next({
        error: error.message || 'There was an error.',
        type: errorType,
      }),
  )
}
