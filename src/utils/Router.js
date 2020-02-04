import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { ConnectedRouter } from 'connected-react-router'

const Router = ({ children, history }) => (
  <ConnectedRouter history={history}>
    <Route
      render={({ location: { pathname, search, hash } }) =>
        pathname !== '/' && pathname.slice(-1) === '/' ? (
          <Redirect to={`${pathname.slice(0, -1)}${search}${hash}`} />
        ) : (
          children
        )
      }
    />
  </ConnectedRouter>
)

export default Router;