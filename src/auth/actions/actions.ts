import * as types from './../constants/actions';

import {IActionChange} from '../types/Actions';
import { IAuthState } from '../types/IAuthState';

export const setFormField=(
	fieldName: keyof IAuthState,
	value: string,
): IActionChange=>({
	type: types.SET_FORM_FIELD,
	payload: {
		fieldName,
		value
	}
});