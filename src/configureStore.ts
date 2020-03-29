import { createLogger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import {rootReducer as createRootReducer} from './reducers'
import thunkMiddleware from 'redux-thunk';


export default function configureStore(preloadedState?: any) {
	const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const logger = createLogger();
	const store = createStore(
		createRootReducer(),
		preloadedState,
		composeEnhancer(
			applyMiddleware(
			thunkMiddleware,
			logger
			),
		),
	)

	return store
}
