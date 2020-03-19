import { InputModel } from "../types/InputModel";
import { IAuth, IEmail, IPhone, IPassword } from "../types/IAuthState";



export const logins : InputModel<IEmail & IPhone>[] = [
	{
		id: '1',
		name: 'email',
		placeholder: 'Email'
	},
	{
		id: '1',
		name: 'phone',
		placeholder: 'Phone'
	},
];


export const authWithData:(param:number) => InputModel<IPassword & IEmail & IPhone>[]   =(param)=> [
	logins[param],
	{
		id: '2',
		name: 'password',
		placeholder: 'Password',
		isHide: true
	}
];
