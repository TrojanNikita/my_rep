import * as React from 'react';
import Button from '../../ui/Button';

import styles from './login-form.scss';
import Input from '../../ui/Input';

interface LoginProps{
	inputUPlaceholder: string;
	inputUValue: string;
	inputUOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	inputPPlaceholder: string;
	inputPValue: string;
	inputPOnChange: (e:React.FormEvent<HTMLInputElement>)=>void;
	buttonOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Login ({
	inputUPlaceholder='input 1', inputUValue='', inputUOnChange,
	inputPPlaceholder='input 2',inputPValue='', inputPOnChange,
	buttonOnClick}: LoginProps) {

	return (
		<>
			<form id="login-form">
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
			</form>
			<Button
				kind='default'
				type='button'
				onClick={buttonOnClick}
			>
				Login
			</Button>
		</>
	);
};

export default React.memo(Login);


// data-error={errorMessage?'error username':undefined}



// className={styles.loginFormInput}
//{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

// <button type="submit" className="btn btn-dark btn-sm form-login-btn">
//             Login
//           </button>


//<input type="text" className='auth-form__content__username' placeholder="Username" required />

  // return (
	// 	<main className={'auth-form'}>

	// 		<InfoLine title="Требуется идентификация" />
	// 		<Footer style={{ justifyContent: 'flex-end' }}>
	// 			<Button
	// 				kind="secondary"
	// 				form="auth-form"
	// 				type="submit"
	// 			>
	// 				Идентифицировать
	// 			</Button>
	// 		</Footer>
	// 	</main>
	// );



