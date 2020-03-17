import * as types from '../constants/actions';
interface IFormFieldChange {
	type: typeof types.SET_FORM_FIELD;
	payload: {
		fieldName: string,
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
