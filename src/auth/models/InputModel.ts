import { IAuthState } from "./IAuthState";

export interface InputModel{
	name: keyof IAuthState;
	placeholder: string;
	isHide?: boolean;
}