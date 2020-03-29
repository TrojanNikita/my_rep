import { InputModel } from "../types/InputModel";
import { IAuth } from "../reducers/auth";


// TODO: Пока что это ужасный и медленный файл, сделать так чтоб поля объявлялись в одном месте
export const logins : InputModel<IAuth>[] = [
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

export const authWithData:(param:number) => InputModel<IAuth>[]=(param)=> [
	logins[param],
	{
		id: 'password',
		name: 'password',
		placeholder: 'Password',
		isHide: true
	}
];
