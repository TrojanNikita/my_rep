
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

    const {url}=useRouteMatch();
    const [activeLink, setActiveLink]=React.useState<AuthRoute>(AuthRoutes.find(
        (route)=>(`auth${route.path}`===url))||AuthRoutes[0]);
    React.useEffect(
        () => {
            setActiveLink(activeLink)
        },
        [url]
    )    
    
    return(
        <ul className={styles.authNav}>
            {AuthRoutes.map((route: AuthRoute) => (
                <li 
                    className={cn(styles.authNavEl)} key={route.id}>
                    
                    <RouteButton redirectTo={`${url}${route.path}`}>
                        {(props) => (
                                <Button {...props}>
                                    {route.description}
                                </Button>
                            )}
                    </RouteButton>
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