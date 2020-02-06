import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import {rootReducer as createRootReducer} from './reducers'
import thunkMiddleware from 'redux-thunk';

export const history = createBrowserHistory()

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const logger = createLogger();
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        logger
      ),
    ),
  )

  // // Hot reloading
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(createRootReducer(history));
  //   });
  // }

  return store
}






// import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
// import  {ITodosState}  from './todos/types';
// import thunkMiddleware from 'redux-thunk';

// //Сохранение состояния во время перезагрузки
// //import { save, load } from "redux-localstorage-simple"

// import {rootReducer} from './todos/reducers';

// const logger = createLogger();

// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,logger)(createStore);

// export default function configureStore(initialState?:ITodosState) {
//   return createStoreWithMiddleware(rootReducer);
// }
