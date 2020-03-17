//import { IAuthState } from "./IAuthState";

export interface InputModel<T>{
	name: keyof T;
	placeholder: string;
	isHide?: boolean;
}