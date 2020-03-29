import * as types from '../constants/actions';
import { IAuth } from './../reducers/auth';
interface IFormFieldChange {
	type: typeof types.SET_FORM_FIELD;
	payload: {
		fieldName: keyof IAuth,
		value: string
	};
}
export type IActionChange = IFormFieldChange;
