import {SET_USERNAME, SET_PASSWORD, SET_EMAIL} from '../constants/actions';
import  {IAuthState}  from '../models/IAuthState';
import {ActionAuth} from '../models/Actions';

const initState: IAuthState = {
		username: '',
		password: '',
		email: ''
};

export function AuthReducer (
	state=initState,
	action: ActionAuth): IAuthState {
	switch (action.type) {
		case SET_USERNAME:
			return {
				...state,
				username: action.payload
			}
		case SET_PASSWORD:
			return {
				...state,
				password: action.payload
			}
		case SET_EMAIL:
			return {
				...state,
				email: action.payload
			}
		default:
			return state
	}
}

export default AuthReducer;