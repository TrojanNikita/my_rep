import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './app';

import './global.scss';


const render = () => {
	ReactDOM.render(
	<App/>,
	document.getElementById('react-root')
	)
};

render();
