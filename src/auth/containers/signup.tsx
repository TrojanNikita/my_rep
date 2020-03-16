import * as React from 'react'

import Signup from './../components/signup';
import { getAuth } from '../selectors/auth-selector';
import {setUsername, setPassword, setEmail, setName, setLastname, setConfirmPassword} from './../actions/actions';
import {useDispatch, useSelector} from 'react-redux';

const SignupContainer:React.FC =() => {

	const {useCallback, useState} = React;
	const [errorMessage, setErrorMessage] = useState(false);
	let dispatch=useDispatch();
	const auth = useSelector(getAuth);

	const usernameChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setUsername(e.currentTarget.value));
	},[setUsername]);
	const passwordChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setPassword(e.currentTarget.value));
	},[setUsername]);
	const nameChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setName(e.currentTarget.value));
	},[setUsername]);
	const lastNameChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setLastname(e.currentTarget.value));
	},[setUsername]);
	const confirmPasswordChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setConfirmPassword(e.currentTarget.value));
	},[setUsername]);
	const emailChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setEmail(e.currentTarget.value));
	},[setUsername]);

	function handleSubmit() {
		setErrorMessage(true);
	}

return (<Signup
			inputNPlaceholder='Name'
			inputNValue={auth.name}
			inputNOnChange={nameChange}
			inputLNPlaceholder='Last Name'
			inputLNValue={auth.last_name}
			inputLNOnChange={lastNameChange}
			inputUPlaceholder='Username'
			inputUValue={auth.username}
			inputUOnChange={usernameChange}
			inputPPlaceholder='Password'
			inputPValue={auth.password}
			inputPOnChange={passwordChange}
			inputCPPlaceholder='Confirm Password'
			inputCPValue={auth.confirm_password}
			inputCPOnChange={confirmPasswordChange}
			inputEPlaceholder='Email'
			inputEValue={auth.email}
			inputEOnChange={emailChange}
			buttonOnClick={handleSubmit}
		/>);
};

export default SignupContainer;