import * as types from './../constants/actions';

// interface IUsernameChange {
// 	type: typeof types.SET_USERNAME;
// 	payload: string;
// }
// interface IPasswordChange {
// 	type: typeof types.SET_PASSWORD;
// 	payload:string;
// }
// interface IEmailChange {
// 	type: typeof types.SET_EMAIL;
// 	payload:string;
// }
// interface INameChange {
// 	type: typeof types.SET_NAME;
// 	payload: string;
// }
// interface ILastnameChange {
// 	type: typeof types.SET_LASTNAME;
// 	payload:string;
// }
// interface IConfirmPasswordChange {
// 	type: typeof types.SET_CONFIRMPASSWORD;
// 	payload:string;
// }

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
