
import * as React from 'react';
import { Link,  useLocation } from "react-router-dom";
import { Routes as AuthRoutes } from '../routes/index';

import {Route as AuthRoute} from './../../types/Route'
import {useRouteMatch} from 'react-router-dom';




//useLocation вместо withRouter и тд

const AuthNav:React.FC=()=>{


	const {url}=useRouteMatch();
    return(
        <ul className='nav-bar row'>
            {AuthRoutes.map((route: AuthRoute) => (
            <li className="nav-li col" key={route.id}>
                <Link   to={`${url}${route.path}`} 
                        className={''}>
                        {route.description}
                </Link>
            </li>
            ))}
        </ul>
    );
};

export default AuthNav;