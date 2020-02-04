

import * as React from 'react';
import * as ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import configureStore, { history } from './configureStore';
import App from './App';

import './index.scss';


// const store = configStore();

// const App = () => (
//   <Provider store={store}>

//   </Provider>
// );

const store = configureStore();
const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App history={history} />
      </Provider>,
    document.getElementById('react-root')
  )
};

render()
    
// // Hot reloading
// if (module.hot) {
//   // Reload components
//   module.hot.accept('./App', () => {
//     render()
//   })
// }