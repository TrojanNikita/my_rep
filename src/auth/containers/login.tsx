import * as React from 'react'

import Login from './../components/login';
import {getAuth} from '../selectors/auth-selector';
import {setFormField} from './../actions/actions';
import { useAuthUser } from '../../utils/AuthUser';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const LoginContainer:React.FC =() => {

	const {useCallback, useState} = React;

	const [errorMessage, setErrorMessage] = useState(false);
	const dispatch = useDispatch();
	const auth=useSelector(getAuth);




	const inputChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
			dispatch(setFormField(e.currentTarget.name, e.currentTarget.value));
	},[]);





	function handleSubmit(e:React.FormEvent) {
		setErrorMessage(true);
		//e.preventDefault()
		//const [usernameNode, passwordNode] = e.target.elements
		//setLogged(true);
		//history.push('/');
		// apiLogin(usernameNode.value, passwordNode.value)
		//   .then(() => {
		//     setLogged(true)
		//     history.push('/projects')
		//   })
		//   .catch(() => {
		//     setLogged(false)
		//     setErrorMessage('Invalid')
		//   })

	}



return (<Login
			inputUPlaceholder='Username'
			inputUValue={auth.username}
			inputUOnChange={inputChange}
			inputPPlaceholder='Password'
			inputPValue={auth.password}
			inputPOnChange={inputChange}
			buttonOnClick={handleSubmit}
		/>);
};

export default LoginContainer;