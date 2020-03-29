export interface InputModel<T> {
	id: string;
	name: keyof T;
	placeholder: string;
	isHide?: boolean;
}