import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { AuthUserProvider } from '../utils/AuthUser'
import AuthorizedRoute from '../utils/AuthorizedRoute'
import UnauthorizedLayout from '../layouts/unauthorized-layout'
import RootView from '../main/root-view';

const routes = (
  <div>
      <AuthUserProvider>
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/" component={RootView} />
          <Redirect to="/" />
        </Switch>
      </AuthUserProvider>
  </div>
);

export default routes;