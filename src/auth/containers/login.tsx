import * as React from 'react'

import Login from './../components/login';
import {getAuth} from '../selectors/auth-selector';
import {setUsername, setPassword, setEmail} from './../actions/actions';
import { useAuthUser } from '../../utils/AuthUser';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const LoginContainer:React.FC =() => {

	const {useCallback, useState} = React;

	const [errorMessage, setErrorMessage] = useState(false);
	const dispatch = useDispatch();
	const auth = useSelector(getAuth);




	const usernameChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setUsername(e.currentTarget.value));
	},[setUsername]);
	const passwordChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setPassword(e.currentTarget.value));
	},[setUsername]);


	function handleSubmit() {
		setErrorMessage(true);
	}

return (<Login
		inputUPlaceholder='Username'
		inputUValue={auth.username}
		inputUOnChange={usernameChange}
		inputUError={errorMessage}
		inputPPlaceholder='Password'
		inputPValue={auth.password}
		inputPOnChange={passwordChange}
		buttonOnClick={handleSubmit}
	/>);
};

export default LoginContainer;