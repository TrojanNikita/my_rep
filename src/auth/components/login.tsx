import * as React from 'react';
// import Panel from '../ui/Panel'
import { useAuthUser } from '../../utils/AuthUser';
import {useHistory} from 'react-router-dom';
import Button from '../../ui/Button';
import Footer from '../../ui/Footer';
import InfoLine from '../../ui/InfoLine';
import {InputType, ButtonType} from './../../ui/types'

import './auth.scss';
import Input from '../../ui/Input';
import { infoLine } from '../../ui/InfoLine/InfoLine.scss';
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
    const [errorMessage, setErrorMessage] = React.useState();

    const [username, setUsername]=React.useState('');

    const [password, setPassword]=React.useState('');

    const usernameChange = (e:React.FormEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value);
    };
    const passwordChange = (e:React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };


    function handleSubmit(e:React.FormEvent) {

        //e.preventDefault()
        //const [usernameNode, passwordNode] = e.target.elements
        
        setLogged(true);
        history.push('/');

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
        <InfoLine title={'Welcome ...'}/>
        <form className="auth-form__content">
            <Input 
                value={username}
                placeholder="Username"
                onChange={usernameChange}
            />
            <Input
                value={password}
                placeholder="Password"
                onChange={passwordChange}
            />       
        </form>    
        <Button
            kind="success"
            form="auth-form__content"
            type="submit"
            onSubmit={handleSubmit}
        >
            Login
        </Button>   
      </>
  );
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



};

export default Login;