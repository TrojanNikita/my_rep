import * as React from 'react'
import Cookies from 'js-cookie'

const AuthUserContext = React.createContext()

// So we don't conflict with your localhost
const cookieName = 'RR5CourseLogged'

export const AuthUserProvider = ({ children }) => {
  const cookieLogged = Cookies.getJSON(cookieName)
  const [logged, setLogged] = React.useState(cookieLogged ? cookieLogged.logged : false)

  React.useEffect(() => {
    if (logged) {
      Cookies.set(cookieName, { logged: true })
    } else {
      Cookies.remove(cookieName)
    }
  }, [logged])

  return <AuthUserContext.Provider value={{ logged, setLogged }}>{children}</AuthUserContext.Provider>
}

export const useAuthUser = () => {
  return React.useContext(AuthUserContext)
}