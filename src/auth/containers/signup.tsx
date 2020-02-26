import * as React from 'react'

import Signup from './../components/signup';
import { getAuth } from '../selectors/auth-selector';
import {setFormField} from './../actions/actions';
import { useAuthUser } from '../../utils/AuthUser';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const SignupContainer:React.FC =() => {

	let dispatch=useDispatch();
	const auth = useSelector(getAuth);

	const inputChange = (e:React.FormEvent<HTMLInputElement>) => {
		dispatch(setFormField(e.currentTarget.name,e.currentTarget.value));
	};

return (<Signup
			inputUPlaceholder='Username'
			inputUValue={auth.username}
			inputUOnChange={inputChange}
			inputPPlaceholder='Password'
			inputPValue={auth.password}
			inputPOnChange={inputChange}
			buttonOnClick={handleSubmit}
		/>);
};

export default SignupContainer;