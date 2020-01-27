
import * as React from 'react'
import { History } from 'history'
import routes from './routes'
import Router from './utils/Router';
import { ConnectedRouter } from 'connected-react-router';

interface AppProps {
  history: History;
};

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
};

export default App;