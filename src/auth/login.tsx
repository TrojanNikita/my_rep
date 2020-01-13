import * as React from 'react';
// import Panel from '../ui/Panel'
// import Card from '../ui/Card'
import { useAuthUser } from '../utils/AuthUser';
import {useHistory} from 'react-router-dom';

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
    
    setLogged(true)
    history.push('/todos')

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
    <React.Fragment>
      <div style={{ minHeight: '10em' }}>
        <h1 className="heading-2">Welcome to Firebase, almost...</h1>
        <p>
          The username is <strong>react</strong> and the password is <strong>react</strong>
        </p>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form className="spacing" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Login