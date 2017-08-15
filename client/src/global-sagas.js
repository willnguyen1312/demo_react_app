/* eslint-disable */
function* helloSaga() {
  console.log('Hello Sagas!')
}

import { fork, all } from 'redux-saga/effects'

import loginSaga from './containers/Login/sagas'

const sagas = [
  loginSaga,
  helloSaga,
  // NOTE: put other app sagas here
]

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga))

  yield all([...globalSagasForks])
}

export default globalSagas
