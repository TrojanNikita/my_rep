import * as React from 'react';
import * as ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import Router from './utils/Router'
import { AuthUserProvider } from './utils/AuthUser'
import AuthorizedRoute from './utils/AuthorizedRoute'
import UnauthorizedLayout from './layouts/unauthorized-layout'
import configStore from './configStore';

import './index.scss';

import RootView from './main/root-view';

const store = configStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <AuthUserProvider>
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/" component={RootView} />
          <Redirect to="/" />
        </Switch>
      </AuthUserProvider>
    </Router>
  </Provider>
);
    
ReactDOM.render(<App />, document.getElementById('app'));