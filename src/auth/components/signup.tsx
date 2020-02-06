import * as React from 'react';
// import Panel from '../ui/Panel'
import { useAuthUser } from '../../utils/AuthUser';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '../../ui/Button';
import Footer from '../../ui/Footer';
import InfoLine from '../../ui/InfoLine';
import {InputType, ButtonType} from './../../ui/types';
import {changeUsername, changePassword} from './../actions/actions';

//import './auth.scss';
import Input from '../../ui/Input';
import { infoLine } from '../../ui/InfoLine/InfoLine.scss';
import { getUsername, getPassword } from '../selectors/auth-selector';

const Signup = () => {
    const { setLogged } = useAuthUser();
    let history=useHistory();
    const dispatch = useDispatch();
    const username=useSelector(getUsername);
    const password=useSelector(getPassword);
    const [name, setName]=React.useState('');
    const [lastName, setLastName]=React.useState('');
    const [confirmPassword, setConfirmPassword]=React.useState('');
    const [email, setEmail]=React.useState('');


    const usernameChange = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch(changeUsername(e.currentTarget.value));
    };
    const passwordChange = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch(changePassword(e.currentTarget.value));
    };
    const nameChange = (e:React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    const lastNameChange = (e:React.FormEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value);
    };
    const confirmPasswordChange = (e:React.FormEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value);
    };
    const emailChange = (e:React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };
    function handleSubmit(e:React.FormEvent) {    
        setLogged(true);
        history.push('/');
    }

  return (
      <>
        <form className="auth-form__content">
            <Input 
                value={name}
                placeholder="Name *"
                onChange={nameChange}
            />
            <Input
                value={lastName}
                placeholder="Last Name *"
                onChange={lastNameChange}
            />
            <Input 
                value={username}
                placeholder="Username *"
                onChange={usernameChange}
            />
            <Input
                value={password}
                placeholder="Password *"
                onChange={passwordChange}
            /> 
            <Input
                value={confirmPassword}
                placeholder="Confirm Password *"
                onChange={confirmPasswordChange}
            />   
            <Input
                value={email}
                placeholder="Email *"
                onChange={emailChange}
            />        
        </form>    
        <Button
            kind="success"
            form="auth-form__content"
            type="submit"
            onSubmit={handleSubmit}
        >
            Signup
        </Button>   
      </>
  );
};

export default Signup;