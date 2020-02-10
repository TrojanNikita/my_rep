
import * as React from 'react'
import { History } from 'history'
import routes from './routes'
import Router from './utils/Router';
import { ConnectedRouter } from 'connected-react-router';
import Button from './ui/Button'

import {Provider} from 'react-redux';
import configureStore, { history } from './configureStore';

const store = configureStore();

const App = () => {
  return (
    <Button 
        kind='default'
        type='button'
    >
        Login
    </Button>
  )
};

export default App;


// <Provider store={store}>
//       <ConnectedRouter history={history}>
//         { routes }
//       </ConnectedRouter>
//     </Provider>