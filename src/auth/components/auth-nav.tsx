
import * as React from 'react';
import { Link,  useLocation } from "react-router-dom";
import { Routes as AuthRoutes } from '../routes/index';

import {Route as AuthRoute} from './../../types/Route'
import {useRouteMatch} from 'react-router-dom';
import RouteButton from '../../utils/RouteButton';
import Button from '../../ui/Button';
import cn from 'classnames';
import styles, { authNav } from './auth-nav.scss'



//useLocation вместо withRouter и тд

const AuthNav:React.FC=()=>{

    const location = useLocation();
    const {url}=useRouteMatch();
    const [activeLink, setActiveLink]=React.useState<AuthRoute>(AuthRoutes.find(
        (route)=>(`/auth${route.path}`===location.pathname))||AuthRoutes[0]);
    // React.useEffect(
    //     () => {
    //         debugger
    //         setActiveLink(activeLink)
    //         console.log(activeLink);
    //     },
    //     [location.pathname, setActiveLink]
    // )  
    const handleClick=React.useCallback(
        (route: AuthRoute) =>()=> {
            setActiveLink(route);  
        },
        [setActiveLink],
    )

    return(
        <ul className={styles.authNav}>
            {AuthRoutes.map((route: AuthRoute) => (
                <li 
                    className={cn(styles.element)} 
                    key={route.id}
                    style={{ borderBottom:  activeLink.description === route.description? 
                        '3px solid rgb(255, 203, 126)': 'none'}}
                >
                    <Link   to={`${url}${route.path}`}
                            className={styles.link}
                            onClick={handleClick(route)}
                    >
                        {route.description}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default AuthNav;

// <ul className='nav-bar row'>
// {AuthRoutes.map((route: AuthRoute) => (
// <li className="nav-li col" key={route.id}>
//     <Link   to={`${url}${route.path}`} 
//             className={''}>
//             {route.description}
//     </Link>
// </li>
// ))}
// </ul>