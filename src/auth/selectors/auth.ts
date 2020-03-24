import {RootState} from '../../reducers'
import { createSelector } from 'reselect';


export const getAuth = (state: RootState) => state.auth;
export const getPath = (state: RootState) => state.router;

// TODO: с изменением файла с типами и данными, функция должна стать более чистой
// TODO: избавиться от 'Sign Up' : 'Sign In'
export const getButtonName = createSelector(
	[getPath],
	path => path.location.pathname === '/auth/sign' ? 'Sign Up' : 'Sign In'
);