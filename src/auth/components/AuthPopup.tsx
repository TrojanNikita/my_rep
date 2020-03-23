import * as React from 'react';
import Button from '../../ui/Button';

import Input from '../../ui/Input';
import { IAuth } from '../types/IAuthState';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, getButtonName } from '../selectors/auth';
import { setFormField } from '../actions/actions';
import {authWithData as inputData} from './../constants/data';

// TODO: сделать логичный параметр
// Судя по всему в этом файле больше всего логики, то есть глупо тут играть с числовым значением login
interface SignupProps {
	login: number;
}

function AuthPopup ({ login }: SignupProps) {

	const {useState, useCallback} = React;
	let dispatch=useDispatch();
	const auth: IAuth = useSelector(getAuth);
	const [errorMessage, setErrorMessage] = useState(false);
	const buttonLabel = useSelector(getButtonName);

	const getValue: ((field: keyof IAuth) => string)= (field: keyof IAuth) => auth[field];

	const handleChange = useCallback(({ currentTarget: {name, value} }:React.SyntheticEvent<HTMLInputElement>) => {
		dispatch(
			setFormField(name as (keyof IAuth), value)
		);
	},[setFormField]);

	function handleSubmit() {
		const {password} = auth;

		password === 'sfs'
		? null
		: setErrorMessage(true);
	}

	const inputs = React.useMemo(() => inputData(login).map(({name, placeholder, isHide})=>
		<Input
			key={name}
			name={name}
			type={isHide? 'password': undefined}
			placeholder={placeholder}
			value={getValue(name)}
			onChange={handleChange}
			data-error={errorMessage? 'Не удалось войти': undefined}
		/>
	), [inputData,errorMessage,getValue, handleChange]);

	return (
		<div>
			<form className="auth-form__content">
				{inputs}
			</form>
			<Button
					kind='default'
					type='button'
					onClick={handleSubmit}
			>
				{buttonLabel}
			</Button>
		</div>
	);
};

export default React.memo(AuthPopup);
