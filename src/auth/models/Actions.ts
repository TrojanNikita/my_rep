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
//Union action for todos

export type ActionAuth = IUsernameChange | IPasswordChange | IEmailChange;
