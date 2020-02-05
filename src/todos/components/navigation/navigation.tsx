
import * as React from 'react';
import { Link,  useLocation } from "react-router-dom";
import { AppRoutes } from '../../routes/app-routes';

import {AppRoute} from './../../types'
import {useRouteMatch} from 'react-router-dom';



import {setStatus} from './../../actions/actionStatusMode'



import {ActionTypeStatusMode} from './../../actions/actionStatusMode' 
import { connect } from 'react-redux';

import './navigation.scss';



interface INavigation {
    setStatus:(status: string) => ActionTypeStatusMode;
}

//useLocation вместо withRouter и тд

const NavigationConnect:React.FC<INavigation>=({setStatus})=>{

    
	const {path, url}=useRouteMatch();
    console.log(path);
    const [activeLink, setActiveLink]=React.useState<AppRoute>(AppRoutes.find(
        (route)=>(`todos${route.path}`===path))||AppRoutes[0]);

    React.useEffect(
        () => {
            setStatus(activeLink.description)
        },
        [setStatus,activeLink,path]
    )
//location,setStatus,activeLink
    const handleClick=React.useCallback(
        (route:AppRoute) =>()=> {
            console.log(route)
            
            setActiveLink(route);
            setStatus(activeLink.description);
            
        },
        [setActiveLink,setStatus],
    )
    const linkClass='link btn ';

    return(
        <ul className='nav-bar row'>
            {AppRoutes.map((route: AppRoute) => (
            <li className="nav-li col" key={route.id} onClick={handleClick(route)}>
                <Link   to={`${url}${route.path}`} 
                        className={
                            (route === activeLink ? 
                                linkClass+"active" : linkClass)
                        }>
                        {route.description}
                </Link>
            </li>
            ))}
        </ul>
    );
  };


  const mapDispatchToProps={
    setStatus
};

//Передаем в пропс количество активных, оборачиваем в мемо,
//т,е, перерисовываем , когда меняется кол-во активных
export default connect(null, mapDispatchToProps)(NavigationConnect);
  
  