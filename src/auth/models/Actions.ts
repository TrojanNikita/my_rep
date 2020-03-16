import * as types from './../constants/actions';

interface IUsernameChange {
	type: typeof types.SET_USERNAME;
	payload: string;
}
interface IPasswordChange {
	type: typeof types.SET_PASSWORD;
	payload:string;
}
interface IEmailChange {
	type: typeof types.SET_EMAIL;
	payload:string;
}
interface INameChange {
	type: typeof types.SET_NAME;
	payload: string;
}
interface ILastnameChange {
	type: typeof types.SET_LASTNAME;
	payload:string;
}
interface IConfirmPasswordChange {
	type: typeof types.SET_CONFIRMPASSWORD;
	payload:string;
}
//Union action for todos

export type IActionChange = IUsernameChange
| IPasswordChange
| IEmailChange
| INameChange
| ILastnameChange
| IConfirmPasswordChange;
