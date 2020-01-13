import * as React from 'react';
import * as ReactDOM from "react-dom";

import { Switch, Route, Redirect } from 'react-router-dom'
import Router from './utils/Router'
import { AuthUserProvider } from './utils/AuthUser'
import AuthorizedRoute from './utils/AuthorizedRoute'
import UnauthorizedLayout from './layouts/unauthorized-layout'


import './index.scss';

import RootView from './main/root-view';


  const App = () => (
      <Router>
        <AuthUserProvider>
          <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/todos" component={RootView} />
            <Redirect to="/todos" />
          </Switch>
        </AuthUserProvider>
      </Router>
);
    
ReactDOM.render(<App />, document.getElementById('app'));