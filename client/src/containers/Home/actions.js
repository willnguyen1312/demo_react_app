import { CALL_API } from '../../middleware/api'

export const QUOTE_REQUEST = 'QUOTE_REQUEST'
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS'
export const QUOTE_FAILURE = 'QUOTE_FAILURE'

// Uses the API middlware to get a quote
export function fetchQuote() {
  return {
    [CALL_API]: {
      endpoint: 'random-quote',
      types: [QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE],
    },
  }
}

// Same API middlware is used to get a
// secret quote, but we set authenticated
// to true so that the auth header is sent
export function fetchSecretQuote() {
  return {
    [CALL_API]: {
      endpoint: 'protected/random-quote',
      authenticated: true,
      types: [QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE],
    },
  }
}
