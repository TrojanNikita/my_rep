import {RootState} from './../../reducers'


export const getAuth = (state: RootState) => state.auth;
export const getPath = (state: RootState) => state.router;
//export const getPassword = (state: RootState) => state.auth.password;
