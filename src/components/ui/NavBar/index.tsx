
import * as React from 'react';
import { Link } from "react-router-dom";
import cn from 'classnames';
import {Route as IRoute} from '../../../types/Route';

interface INavBar{
    routes: IRoute[];
    cur_url:string;
    className: string;
}

const NavBar=({routes, cur_url, className}:INavBar)=>{
    
    return(
        <ul className='nav-bar row'>
            { routes.map((route: IRoute) => (
                <li className="nav-li col" key={route.id}>
                    <Link   to={`${cur_url}${route.path}`} 
                            className={''}>
                            {route.description}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavBar;