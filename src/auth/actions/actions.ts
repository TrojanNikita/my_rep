import * as types from './../constants/actions';

import {IActionChange} from '../types/Actions';
import { IAuth } from '../types/IAuthState';

export const setFormField=(
	fieldName: keyof IAuth,
	value: string,
): IActionChange=>({
	type: types.SET_FORM_FIELD,
	payload: {
		fieldName,
		value
	}
});