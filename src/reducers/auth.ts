import {SET_FORM_FIELD} from '../constants/actions';
import  {IAuth}  from '../types/IAuthState';
import {IActionChange} from '../types/Actions';

const initState: IAuth = {
		password: '',
		email: '',
		phone: '',
};

export default function authReducer (
	state=initState,
	{ type, payload }: IActionChange): IAuth {
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
