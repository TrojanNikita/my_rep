import {SET_FORM_FIELD} from '../constants/actions';
import  {IAuthState}  from '../models/IAuthState';
import {ActionAuth} from '../models/Actions';

const initState: IAuthState = {
		username: '',
		password: ''
};

export function AuthReducer (
	state=initState,
	action: ActionAuth): IAuthState {
	switch (action.type) {
		case SET_FORM_FIELD:
			return {
				...state,
				[action.payload.name]: action.payload.value
			}
		default:
			return state
	}
}

export default AuthReducer;