import { Route } from "../types/Route";

export const BASE_URL = '/auth';


export enum AuthNames {
	login,
	signup,
}

export enum login {
	email,
	phone,
}

export const URLS: Route[] = [
	{
		name: 'login', description: 'Log In', path: `${BASE_URL}`
	},
	{
		name: 'signup', description: 'Sign Up', path: `${BASE_URL}/sign`
	}
];