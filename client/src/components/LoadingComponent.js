import React from 'react'
// eslint-disable-next-line
export const LoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    // Handle the error state
    return <div>Sorry, there was a problem loading the page.</div>
  }
  return null
}
