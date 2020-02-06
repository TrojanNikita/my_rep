

import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './app';

import './index.scss';


const render = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('react-root')
  )
};

render();
