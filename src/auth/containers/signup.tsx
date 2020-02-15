import * as React from 'react'

import Signup from './../components/signup';
import { getUsername, getPassword } from '../selectors/auth-selector';
import {changeUsername, changePassword} from './../actions/actions';
import { useAuthUser } from '../../utils/AuthUser';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const SignupContainer:React.FC =() => {


    const inputChange = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch(changeForm(e.currentTarget.value));
    };







return (<Signup
			inputUPlaceholder='Username'
			inputUValue={username}
			inputUOnChange={usernameChange}
			inputPPlaceholder='Password'
			inputPValue={password}
			inputPOnChange={passwordChange}
			buttonOnClick={handleSubmit}
		/>);
}; 

export default SignupContainer;