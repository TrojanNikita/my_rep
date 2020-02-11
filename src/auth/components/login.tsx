import * as React from 'react';
import { useAuthUser } from '../../utils/AuthUser';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '../../ui/Button';
import {changeUsername, changePassword} from './../actions/actions';

import styles from './login-form.scss';
import Input from '../../ui/Input';
import { getUsername, getPassword } from '../selectors/auth-selector';
// Fake API Network Call
// const apiLogin = (username, password) => {
//   return new Promise((resolve, reject) => {
//     if (username === 'react' && password === 'react') {
//       resolve()
//     } else {
//       reject()
//     }
//   })
// }


const Login = () => {
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

  return (
      <>
        <form id="login-form" onSubmit={handleSubmit}>
            <Input 
                value={username}
                data-error={errorMessage?'error username':undefined}
                placeholder="Username"
                onChange={usernameChange}
            />
            <Input
                type = 'password'
                value={password}
                placeholder="Password"
                onChange={passwordChange}
            />       
        </form>    
        <Button 
            kind='default'
            type='button'
            onClick={handleSubmit}
        >
            Login
        </Button>
      </>
  );
};

export default Login;



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



