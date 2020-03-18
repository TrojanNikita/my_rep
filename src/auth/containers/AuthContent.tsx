import { useRouteMatch, useLocation } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IAuth } from '../types/IAuthState';
import { getAuth } from '../selectors/auth-selector';
import { setFormField } from '../actions/actions';
import {authWithEmailData, authWithPhoneData} from './../constants/data'
import AuthPopup from '../components/AuthPopup';
import SwitchComponentWrapper from './../containers/SwitchComponentWrapper';
import Button from "../../ui/Button";


const AuthContent:React.FC =() => {

	const {useCallback, useState} = React;
	const [errorMessage, setErrorMessage] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const location = useLocation();
	let dispatch=useDispatch();
	const data = authWithEmailData;
	const auth: IAuth = useSelector(getAuth);
	console.log(location.pathname);
	const getValue = (field: keyof IAuth) => auth[field];

	const handleChange = useCallback(({ currentTarget: {name, value} }:React.SyntheticEvent<HTMLInputElement>) => {
		dispatch(
			setFormField(name as (keyof IAuth), value)
		);
	},[setFormField]);

	function handleSubmit() {
		const {password} = auth;

		password === confirmPassword
		? null
		: setErrorMessage(true);
	}

	return (
		<SwitchComponentWrapper
			overlayNode={<button></button>}
		>
			{() => {
				return (<AuthPopup
					getValue={getValue}
					inputData={authWithEmailData}
					hasError={errorMessage}
					buttonOnClick={handleSubmit}
					handleChange={handleChange}
				/>);
			}}
		</SwitchComponentWrapper>
	);
};

export default AuthContent;