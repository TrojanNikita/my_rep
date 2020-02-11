
import * as React from 'react'
import { History } from 'history'
import routes from './routes'
import Router from './utils/Router';
import { ConnectedRouter } from 'connected-react-router';
import Input from './ui/Input'

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





// <Input 
// data-error={true?'Ошибка':undefined}
// placeholder='email'/>