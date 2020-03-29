import {SET_FORM_FIELD} from '../constants/actions';
import {IActionChange} from '../types/Actions';

export interface IAuth {
	email: string;
	phone: string;
	password: string;
};

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
