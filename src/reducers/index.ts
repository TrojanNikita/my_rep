
import { combineReducers } from 'redux';
import { History } from 'history';

//reducers
import authReducer from './auth';
//typeof reducers
import {IAuth} from '../types/IAuthState';

//generate root reducer

export const rootReducer = () => combineReducers({
	auth: authReducer
});

export interface RootState {
	auth: IAuth;
}


//export type RootState = ReturnType<typeof rootReducer>;

