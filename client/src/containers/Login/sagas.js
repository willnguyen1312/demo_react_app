import { takeLatest, call, put } from 'redux-saga/effects'

import { receiveLogin } from './actions'

// The middleware to call the API for quotes
// import { CALL_API } from '../../middleware/api'

import { LOGIN_REQUEST } from './constants'

/**
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
* */
const fetchData = (url, options) => {
  const fetchRequest = new Request(url, options)

  return fetch(fetchRequest)
    .then(response => response.json().then(result => ({ result })))
    .catch(error => ({ error }))
}

function* requestLogin({ creds }) {
  const config = {
    body: JSON.stringify(creds),
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Entity: 'contact',
    },
  }
  const { result, error } = yield call(
    fetchData,
    'https://hmsra-gateway.azurewebsites.net/api/authentication/auth/login',
    config,
  )

  localStorage.setItem('access_token', result.payload.access_token)

  if (error) {
    // yield put(getAPIDataError(error))
    // eslint-disable-next-line
    console.log(error)
  }

  yield put(receiveLogin())
}

function* apiData() {
  yield takeLatest(LOGIN_REQUEST, requestLogin)
}

export default apiData
