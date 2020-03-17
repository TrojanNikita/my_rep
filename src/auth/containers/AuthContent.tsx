import { useRouteMatch, useLocation } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ISignupState } from '../types/IAuthState';
import { getAuth } from '../selectors/auth-selector';
import { setFormField } from '../actions/actions';
import {authData, loginData} from './../constants/data'
import AuthPopup from '../components/AuthPopup';


const AuthContent:React.FC =() => {

	const {useCallback, useState} = React;
	const [errorMessage, setErrorMessage] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const location = useLocation();
	let dispatch=useDispatch();
	const auth: ISignupState = useSelector(getAuth);
	const data = location.pathname === '/auth' ? loginData : authData;
	console.log(location.pathname);
	const getValue = (field: keyof ISignupState) => auth[field];

	const handleChange = useCallback(({ currentTarget: {name, value} }:React.SyntheticEvent<HTMLInputElement>) => {
		dispatch(
			setFormField(name as (keyof ISignupState), value)
		);
	},[setFormField]);

	function handleSubmit() {
		const {password} = auth;

		password === confirmPassword
		? null
		: setErrorMessage(true);
	}

	return (<AuthPopup
			getValue={getValue}
			inputData={data}
			hasError={errorMessage}
			buttonOnClick={handleSubmit}
			handleChange={handleChange}
		/>);
};

export default AuthContent;