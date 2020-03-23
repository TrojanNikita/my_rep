import * as t from 'io-ts';
import {Email, UniqueEmail} from './models';

export type IAuth =IPhone & IEmail & IPassword;


export const SignUpForm = t.type({
	// Because of UniqueEmail, we can set async error 'UniqueEmail'.
	email: t.union([Email, UniqueEmail]),
  });

export interface IPassword {
	password: string;
}

export interface IPhone {
	phone: string;
}

export interface IEmail {
	email: string;
}

// export interface IAuthWithEmailState extends IAuth {
// 	email: string;
// }
// export interface IAuthWithPhoneState extends IAuth {
// 	phone: string;
// }



// export enum IEnumAuth {
// 	email = 'email', phone = 'phone'
// }
// export type IModeAuth = 'email' | 'phone';


// function buildUtility<PropNameType extends string>(propName: PropNameType) {
// 	return <PropType>() => function utility<Props extends Partial<{ [k in PropNameType]: PropType }>>(props: Props): string {
// 	  return '';
// 	};
//   }

//   interface ILogin {
// 	  email:string;
// 	  phone: string;
//   }

//   interface Anything<T,K extends keyof T> {
// 	[K: string]: string;
//   }



//   type IEmailProp = {
//     email: string
//   }; 
//   type IPhoneProp = {
//     phone: string
//   };
//    export interface IAuth extends IPhoneProp, IEmailProp {
// 	  password: string;
//   }
  

// // type AdjacencyMap = {
// // 	[side in "top" | "bottom" | "left" | "right"]: number;
// // };

// // export type ILoginState<K extends IModeAuth> = {
// // 	[k in K]: string;
// // 	password: string;
// // }

// export interface IAuthState extends ILoginState<'email'>{
// 	password:string;
// }