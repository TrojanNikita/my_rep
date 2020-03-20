import { useRouteMatch, useLocation } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IAuth } from '../types/IAuthState';
import { getAuth } from '../selectors/auth-selector';
import { setFormField } from '../actions/actions';
import {authWithData} from './../constants/data'
import AuthPopup from '../components/AuthPopup';
import SwitchComponentWrapper from './../containers/SwitchComponentWrapper';
import ClickableIcon from "../../ui/ClickableIcon";
import { login } from '../constants/main';


const AuthContent:React.FC =() => {

	const {useCallback, useState, useMemo} = React;
	const [errorMessage, setErrorMessage] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const location = useLocation();
	let dispatch=useDispatch();
	//const data = useMemo((param:number) => authWithData(param), param);
	//const data = authWithData;
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

	const SWITCH_TITLES = [
		[login.email],
		[login.phone],
	];

	return (
		<SwitchComponentWrapper
			location='row'
			lastNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
			nextNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
			max_params={SWITCH_TITLES.length}
		>
			{({param}) => (
				<AuthPopup
					getValue={getValue}
					inputData={authWithData(param)}
					hasError={errorMessage}
					buttonOnClick={handleSubmit}
					handleChange={handleChange}
				/>
			)}
		</SwitchComponentWrapper>
	);
};

export default AuthContent;



{/* <SwitchComponentWrapper
location='row'
lastNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
nextNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
max_params={SWITCH_TITLES.length}
>
{({param}) => (
	<AuthPopup
		getValue={getValue}
		inputData={authWithData(param)}
		hasError={errorMessage}
		buttonOnClick={handleSubmit}
		handleChange={handleChange}
	/>
)}
</SwitchComponentWrapper> */}