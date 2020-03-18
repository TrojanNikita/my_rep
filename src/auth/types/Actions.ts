import * as types from '../constants/actions';
import { IAuthState } from './IAuthState';
interface IFormFieldChange {
	type: typeof types.SET_FORM_FIELD;
	payload: {
		fieldName: keyof IAuthState,
		value: string
	};
}
//Union action for todos

export type IActionChange = IFormFieldChange;



// IUsernameChange
// | IPasswordChange
// | IEmailChange
// | INameChange
// | ILastnameChange
// | IConfirmPasswordChange
// |
