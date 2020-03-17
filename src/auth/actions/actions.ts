import * as types from './../constants/actions';

import {IActionChange} from '../types/Actions';
import { ISignupState } from '../types/IAuthState';

export const setFormField=(
	fieldName: keyof ISignupState,
	value: string,
): IActionChange=>({
	type: types.SET_FORM_FIELD,
	payload: {
		fieldName,
		value
	}
});