import { InputModel } from "../types/InputModel";
import { ISignupState, ILoginState } from "../types/IAuthState";


export const authData: InputModel<ISignupState>[]  = [
	{
		name: 'name',
		placeholder: 'Name *'
	},
	{
		name: 'last_name',
		placeholder: 'Last Name *'
	},
	{
		name: 'username',
		placeholder: 'Username *'
	},
	{
		name: 'password',
		placeholder: 'Password *',
		isHide: true
	},
	{
		name: 'email',
		placeholder: 'Email *',
	}
];

export const loginData: InputModel<ILoginState>[]  = [
	{
		name: 'username',
		placeholder: 'Username *'
	},
	{
		name: 'password',
		placeholder: 'Password *',
		isHide: true
	}
];