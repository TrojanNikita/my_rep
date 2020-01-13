import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import  {StoreStructure}  from './todos/types';
import thunkMiddleware from 'redux-thunk';

//Сохранение состояния во время перезагрузки
//import { save, load } from "redux-localstorage-simple"

import {rootReducer} from './todos/reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,logger)(createStore);

export default function configureStore(initialState?:StoreStructure) {
  return createStoreWithMiddleware(rootReducer);
}
