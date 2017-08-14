import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoadableVisibility from 'react-loadable-visibility/react-loadable'

import { LoadingComponent } from './components/LoadingComponent'

import AppliedRoute from './components/AppliedRoute'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import UnauthenticatedRoute from './components/UnauthenticatedRoute'

// import asyncComponent from './components/AsyncComponent'

const AsyncHome = LoadableVisibility({
  loader: () => import('./containers/Home'),
  loading: LoadingComponent,
})

const AsyncLogin = LoadableVisibility({
  loader: () => import('./containers/Login'),
  loading: LoadingComponent,
})

const AsyncSignup = LoadableVisibility({
  loader: () => import('./containers/Signup'),
  loading: LoadingComponent,
})

const AsyncNewNote = LoadableVisibility({
  loader: () => import('./containers/NewNote'),
  loading: LoadingComponent,
})

const AsyncNotFound = LoadableVisibility({
  loader: () => import('./containers/NotFound'),
  loading: LoadingComponent,
})

// eslint-disable-next-line
export default ({ childProps }) =>
  (<Switch>
    <AppliedRoute path="/" exact component={AsyncHome} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={AsyncLogin} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={AsyncSignup} props={childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={AsyncNewNote} props={childProps} />
    <Route component={AsyncNotFound} />
  </Switch>)
