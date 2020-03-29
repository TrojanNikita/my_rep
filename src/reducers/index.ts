
import { combineReducers } from 'redux';
import { History } from 'history';

//reducers
import authReducer, {IAuth} from './auth';
//typeof reducers

//generate root reducer

export const rootReducer = () => combineReducers({
	auth: authReducer
});

export interface RootState {
	auth: IAuth;
}


//export type RootState = ReturnType<typeof rootReducer>;

