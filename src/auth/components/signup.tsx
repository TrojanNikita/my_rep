import * as React from 'react';
import Button from '../../ui/Button';

import Input from '../../ui/Input';

interface SignupProps{
	inputNPlaceholder: string;
	inputNValue: string;
	inputNOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	inputLNPlaceholder: string;
	inputLNValue: string;
	inputLNOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	inputUPlaceholder: string;
	inputUValue: string;
	inputUOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	inputPPlaceholder: string;
	inputPValue: string;
	inputPOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	inputCPPlaceholder: string;
	inputCPValue: string;
	inputCPOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	inputEPlaceholder: string;
	inputEValue: string;
	inputEOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	buttonOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}





function Signup ({
	inputNValue, inputNPlaceholder, inputNOnChange,
	inputLNValue, inputLNPlaceholder, inputLNOnChange,
	inputEValue, inputEPlaceholder, inputEOnChange,
	inputCPValue, inputCPPlaceholder, inputCPOnChange,
	inputUPlaceholder='input 1', inputUValue='', inputUOnChange,
	inputPPlaceholder='input 2',inputPValue='', inputPOnChange,
	buttonOnClick}: SignupProps) {
	return (
		<>
			<form className="auth-form__content">
				<Input
					value={inputNValue}
					placeholder={inputNPlaceholder}
					onChange={inputNOnChange}
				/>
				<Input
					value={inputLNValue}
					placeholder={inputLNPlaceholder}
					onChange={inputLNOnChange}
				/>
				<Input
					value={inputUValue}
					placeholder={inputUPlaceholder}
					onChange={inputUOnChange}
				/>
				<Input
					type = 'password'
					value={inputPValue}
					placeholder={inputPPlaceholder}
					onChange={inputPOnChange}
				/>
				<Input
					value={inputCPValue}
					placeholder={inputCPPlaceholder}
					onChange={inputCPOnChange}
				/>
				<Input
					value={inputEValue}
					placeholder={inputEPlaceholder}
					onChange={inputEOnChange}
				/>
			</form>
			<Button
					kind='default'
					type='button'
					onClick={buttonOnClick}
			>
				Signup
			</Button>
		</>
	);
};

export default React.memo(Signup);
