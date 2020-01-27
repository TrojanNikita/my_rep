
import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'




import {TodoReduce} from '../todos/reducers/todo-reduce';
import {ModeStatusReducer} from '../todos/reducers/status-mode-reducer';
import { StoreStructure } from '../todos/types';

import  {ModeStatus}  from '../todos/types';

export const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  TodoReduce,
  ModeStatusReducer
});

export interface RootState {
  TodoReduce: StoreStructure;
  ModeStatusReducer:ModeStatus;
  router: RouterState;
}


//export type RootState = ReturnType<typeof rootReducer>;

