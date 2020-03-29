import { InputModel } from "../types/InputModel";
import { IAuth, IEmail, IPhone, IPassword } from "../types/IAuthState";


// TODO: Пока что это ужасный и медленный файл, сделать так чтоб поля объявлялись в одном месте
export const logins : InputModel<IEmail & IPhone>[] = [
	{
		id: 'email',
		name: 'email',
		placeholder: 'Email'
	},
	{
		id: 'phone',
		name: 'phone',
		placeholder: 'Phone'
	},
];

export const authWithData:(param:number) => InputModel<IPassword & IEmail & IPhone>[]=(param)=> [
	logins[param],
	{
		id: 'password',
		name: 'password',
		placeholder: 'Password',
		isHide: true
	}
];
