
import * as React from 'react'
import { History } from 'history'
import routes from './routes'
import Router from './utils/Router';
import { ConnectedRouter } from 'connected-react-router';

import {Provider} from 'react-redux';
import configureStore, { history } from './configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </Provider>
  )
};

export default App;