import * as React from 'react'

import Login from './../components/login';
import { getUsername, getPassword } from '../selectors/auth-selector';
import {changeUsername, changePassword} from './../actions/actions';
import { useAuthUser } from '../../utils/AuthUser';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const LoginContainer:React.FC =() => {


	const { setLogged } = useAuthUser();
    let history=useHistory();
    const [errorMessage, setErrorMessage] = React.useState(false);
    const dispatch = useDispatch();
    // const [username, setUsername]=React.useState('');
    const username=useSelector(getUsername);
    const password=useSelector(getPassword);


    const usernameChange = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch(changeUsername(e.currentTarget.value));
    };
    const passwordChange = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch(changePassword(e.currentTarget.value));
    };

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
			inputUValue={username}
			inputUOnChange={usernameChange}
			inputPPlaceholder='Password'
			inputPValue={password}
			inputPOnChange={passwordChange}
			buttonOnClick={handleSubmit}
		/>);
}; 

export default LoginContainer;