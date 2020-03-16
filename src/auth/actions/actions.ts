import * as types from './../constants/actions';

import {IActionChange} from './../models/Actions';
import {AuthForm} from './../models/AuthForm';
import { IAuthState } from '../models/IAuthState';

// export const setUsername=(value:string): IActionChange=>({
// 	type: types.SET_USERNAME,
// 	payload: value
// });
// export const setPassword=(value:string): IActionChange=>({
// 	type: types.SET_PASSWORD,
// 	payload: value
// });
// export const setEmail=(value:string): IActionChange=>({
// 	type: types.SET_EMAIL,
// 	payload: value
// });
// export const setName=(value:string): IActionChange=>({
// 	type: types.SET_NAME,
// 	payload: value
// });
// export const setLastname=(value:string): IActionChange=>({
// 	type: types.SET_LASTNAME,
// 	payload: value
// });
// export const setConfirmPassword=(value:string): IActionChange=>({
// 	type: types.SET_CONFIRMPASSWORD,
// 	payload: value
// });

export const setFormField=(
	fieldName: string,
	value: string,
): IActionChange=>({
	type: types.SET_FORM_FIELD,
	payload: {
		fieldName,
		value
	}
});