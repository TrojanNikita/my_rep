import * as React from 'react'

import Signup from './../components/signup';
import { getAuth } from '../selectors/auth-selector';
import {setUsername, setPassword, setEmail, setName, setLastname, setConfirmPassword, setFormField} from './../actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import { InputModel } from '../models/InputModel';
import { IAuthState } from '../models/IAuthState';

const inputData: InputModel[]  = [
	{
		name: 'name',
		placeholder: 'Name *'
	},
	{
		name: 'last_name',
		placeholder: 'Last Name *'
	},
	{
		name: 'username',
		placeholder: 'Username *'
	},
	{
		name: 'password',
		placeholder: 'Password *',
		isHide: true
	},
	{
		name: 'email',
		placeholder: 'Email *',
	}
];

const SignupContainer:React.FC =() => {

	const {useCallback, useState} = React;
	const [errorMessage, setErrorMessage] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	let dispatch=useDispatch();
	const auth = useSelector(getAuth);

	const getValue = (field: keyof IAuthState) => auth[field];

	const handleChange = useCallback(({ currentTarget: {name, value} }:React.FormEvent<HTMLInputElement>) => {
		dispatch(
			setFormField(name, value)
		);
	},[setFormField]);

	function handleSubmit() {
		const {password} = auth;

		password === confirmPassword
		? null
		: setErrorMessage(true);
	}

return (<Signup
			getValue={getValue}
			inputData={inputData}
			hasError={errorMessage}
			buttonOnClick={handleSubmit}
			handleChange={handleChange}
		/>);
};

export default SignupContainer;