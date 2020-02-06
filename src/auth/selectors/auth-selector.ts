import {RootState} from './../../reducers'


export const getUsername = (state: RootState) => state.auth.username;
export const getPassword = (state: RootState) => state.auth.password;
