import * as React from 'react';
import Button from '../../ui/Button';

import Input from '../../ui/Input';
import {InputModel} from '../types/InputModel'
import { IAuth } from '../types/IAuthState';

interface SignupProps {
	hasError: boolean;
	inputData: InputModel<IAuth>[];
	getValue: (field: keyof IAuth) => string;
	buttonOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleChange: (e:React.FormEvent<HTMLInputElement>)=>void;
}

function AuthPopup ({getValue, hasError, inputData, buttonOnClick, handleChange}: SignupProps) {


	const inputs = React.useMemo(() => inputData.map(({name, placeholder, isHide})=>
		<Input
			key={name}
			name={name}
			type={isHide? 'password': undefined}
			placeholder={placeholder}
			value={getValue(name)}
			onChange={handleChange}
			data-error={hasError? 'Не удалось войти': undefined}
		/>
	), [inputData,hasError,getValue,buttonOnClick, handleChange]);


	return (
		<div>
			<form className="auth-form__content">
				{inputs}
			</form>
			<Button
					kind='default'
					type='button'
					onClick={buttonOnClick}
			>
				Signup
			</Button>
		</div>
	);
};

export default React.memo(AuthPopup);
