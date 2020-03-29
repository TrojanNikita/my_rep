import * as types from '../constants/actions';
import { IAuth } from './IAuthState';
interface IFormFieldChange {
	type: typeof types.SET_FORM_FIELD;
	payload: {
		fieldName: keyof IAuth,
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
