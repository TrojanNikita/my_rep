
import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';

//reducers
import {TodoReducer} from '../todos/reducers/todo-reduce';
import {ModeStatusReducer} from '../todos/reducers/status-mode-reducer';
import authReducer from '../auth/reducers/authReducer';
//typeof reducers
import { ITodosState } from '../todos/types';
import  {IModeStatusState}  from '../todos/types';
import {IAuth} from '../auth/types/IAuthState';

//generate root reducer

export const rootReducer = (history: History) => combineReducers({
	router: connectRouter(history),
	todos: TodoReducer,
	modeStatus: ModeStatusReducer,
	auth: authReducer
});

export interface RootState {
	todos: ITodosState;
	modeStatus:IModeStatusState;
	router: RouterState;
	auth: IAuth;
}


//export type RootState = ReturnType<typeof rootReducer>;

