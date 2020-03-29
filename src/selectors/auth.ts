import {RootState} from '../reducers'
import { createSelector } from 'reselect';


export const getAuth = (state: RootState) => state.auth;

// TODO: с изменением файла с типами и данными, функция должна стать более чистой
// TODO: избавиться от 'Sign Up' : 'Sign In'