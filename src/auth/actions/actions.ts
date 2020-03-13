import * as types from './../constants/actions';

import {ActionAuth} from './../models/Actions';
import {AuthForm} from './../models/AuthForm';
import { IAuthState } from '../models/IAuthState';

export const setUsername=(value:string): ActionAuth=>({
	type: types.SET_USERNAME,
	payload: value
})
export const setPassword=(value:string): ActionAuth=>({
	type: types.SET_PASSWORD,
	payload: value
})
export const setEmail=(value:string): ActionAuth=>({
	type: types.SET_EMAIL,
	payload: value
})