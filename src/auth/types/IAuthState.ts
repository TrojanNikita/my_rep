export interface ILoginState{
	username: string;
	password: string;
}

export interface ISignupState extends ILoginState{
	name: string;
	last_name: string;
	email: string;
}