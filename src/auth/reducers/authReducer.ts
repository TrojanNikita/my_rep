import {SET_FORM_FIELD} from '../constants/actions';
import  {ISignupState}  from '../types/IAuthState';
import {IActionChange} from '../types/Actions';

const initState: ISignupState = {
		username: '',
		password: '',
		email: '',
		name: '',
		last_name: '',
};

export default function authReducer (
	state=initState,
	{ type, payload }: IActionChange): ISignupState {
	switch (type) {
		case SET_FORM_FIELD:
			return {
				...state,
				[payload.fieldName]: [payload.value]
			}
		default:
			return state
	}
}
