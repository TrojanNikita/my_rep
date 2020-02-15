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

interface SignupProps{
	inputUPlaceholder: string;
	inputUValue: string;
	inputUOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	inputPPlaceholder: string;
	inputPValue: string;
	inputPOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	buttonOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}





const Signup = ({inputUPlaceholder='input 1', inputUValue='', inputUOnChange,
				inputPPlaceholder='input 2',inputPValue='', inputPOnChange,
				buttonOnClick}: SignupProps) => {
    

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
				value={inputUValue}
				placeholder={inputUPlaceholder}
				onChange={inputUOnChange}
			/>
			<Input
				type = 'password'
				value={inputPValue}
				placeholder={inputPPlaceholder}
				onChange={inputPOnChange}
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
				kind='default'
				type='button'
				onClick={buttonOnClick}
        >
            Signup
        </Button>   
      </>
  );
};

export default React.memo(Signup);
