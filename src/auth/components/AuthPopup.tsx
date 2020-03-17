import * as React from 'react';
import Button from '../../ui/Button';

import Input from '../../ui/Input';
import {InputModel} from '../types/InputModel'
import { ISignupState } from '../types/IAuthState';

interface SignupProps {
	hasError: boolean;
	inputData: InputModel<ISignupState>[];
	getValue: (field: keyof ISignupState) => string;
	buttonOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleChange: (e:React.FormEvent<HTMLInputElement>)=>void;
}

function Signup ({getValue, hasError, inputData, buttonOnClick, handleChange}: SignupProps) {

	return (
		<>
			<form className="auth-form__content">
				{inputData.map(({name, placeholder, isHide})=>
					<Input
						name={name}
						type={isHide? 'password': undefined}
						placeholder={placeholder}
						value={getValue(name)}
						onChange={handleChange}
						data-error={hasError? 'Не удалось войти': undefined}
					/>
				)}
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
