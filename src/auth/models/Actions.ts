import * as types from './../constants/actions'
import { IAuthState } from './IAuthState';

interface IActionChange {
	type: typeof types.SET_FORM_FIELD;
	payload:{
		name:string,
		value: string
	};
}
//Union action for todos
export type ActionAuth = IActionChange;
