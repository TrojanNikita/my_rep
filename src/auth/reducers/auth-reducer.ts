import {SET_USERNAME, SET_PASSWORD, SET_EMAIL, SET_FORM_FIELD} from '../constants/actions';
import  {IAuthState}  from '../models/IAuthState';
import {IActionChange} from '../models/Actions';

const initState: IAuthState = {
		username: '',
		password: '',
		email: '',
		name: '',
		last_name: '',
};

export function AuthReducer (
	state=initState,
	{ type, payload }: IActionChange): IAuthState {
	// switch (action.type) {
	// 	case SET_USERNAME:
	// 		return {
	// 			...state,
	// 			username: action.payload
	// 		}
	// 	case SET_PASSWORD:
	// 		return {
	// 			...state,
	// 			password: action.payload
	// 		}
	// 	case SET_EMAIL:
	// 		return {
	// 			...state,
	// 			email: action.payload
	// 		}
	// 	default:
	// 		return state
	// }
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

export default AuthReducer;