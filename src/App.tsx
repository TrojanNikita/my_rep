import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const App = () => {
	return (
		<Provider store = {store}>
			<BrowserRouter>
				{ Routes }
			</BrowserRouter>
		</Provider>
	)
};

export default hot(App);
