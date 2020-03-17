export const BASE_URL = '/auth';


export enum AuthNames {
	login,
	signup,
}

export const sections=[
	{ 
		name: AuthNames.login, path: `${BASE_URL}` 
	},
	{ 
		name: AuthNames.signup, path: `${BASE_URL}/sign` 
	}
];