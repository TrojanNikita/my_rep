import { InputModel } from "../types/InputModel";
import { IAuth } from "../types/IAuthState";

export const authWithEmailData: InputModel<IAuth>[]  = [
	{
		id: '1',
		name: 'email',
		placeholder: 'Email'
	},
	{
		id: '2',
		name: 'password',
		placeholder: 'Password',
		isHide: true
	}
];

export const authWithPhoneData: InputModel<IAuth>[]  = [
	{
		id: '1',
		name: 'phone',
		placeholder: 'Phone'
	},
	{
		id: '2',
		name: 'password',
		placeholder: 'Password',
		isHide: true
	}
];
