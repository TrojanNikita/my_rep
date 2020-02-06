import * as React from 'react';
// import Panel from '../ui/Panel'
import { useAuthUser } from '../../utils/AuthUser';
import {useHistory} from 'react-router-dom';
import Button from '../../ui/Button';
import Footer from '../../ui/Footer';
import InfoLine from '../../ui/InfoLine';

import './auth.scss';
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

  // return (
  //     <div className='auth-form' style={{ minHeight: '10em' }}>
  //       <div className="auth-form__header">
  //         <h1 className="heading-2">Welcome ...</h1>
  //         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
  //       </div>
  //       <form className="auth-form__content" onSubmit={handleSubmit}>
  //         <input type="text" className='auth-form__content__username' placeholder="Username" required />
  //         <input type="password" className='auth-form__content__password' placeholder="Password" required />
  //         <button type="submit" className="btn btn-dark btn-sm form-login-btn">
  //           Login
  //         </button>
  //       </form>
  //     </div>
  // );


  return (
		<main className={'auth-form'}>

			<InfoLine title="Требуется идентификация" />
			<Footer style={{ justifyContent: 'flex-end' }}>
				<Button
					kind="secondary"
					form="auth-form"
					type="submit"
				>
					Идентифицировать
				</Button>
			</Footer>
		</main>
	);



};

export default Login;