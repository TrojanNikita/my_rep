
import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';

//reducers
import {TodoReducer} from '../todos/reducers/todo-reduce';
import {ModeStatusReducer} from '../todos/reducers/status-mode-reducer';
import {AuthReducer} from '../auth/reducers/auth-reducer';
//typeof reducers
import { ITodosState } from '../todos/types';
import  {IModeStatusState}  from '../todos/types';
import {IAuthState} from '../auth/models/IAuthState';

//generate root reducer

export const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    todos: TodoReducer,
    modeStatus: ModeStatusReducer,
    auth: AuthReducer
});

export interface RootState {
    todos: ITodosState;
    modeStatus:IModeStatusState;
    router: RouterState;
    auth: IAuthState;
}


//export type RootState = ReturnType<typeof rootReducer>;

