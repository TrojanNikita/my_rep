import * as React from 'react';
import { Link,  useLocation, useHistory } from "react-router-dom";
import cn from 'classnames';
import styles from './auth-nav.scss';

//useLocation вместо withRouter и тд
interface AuthNavProps {
	routes: string[];
}

const AuthNav=({routes}:AuthNavProps)=>{

	const {useState} = React;
	const location = useLocation();

	const [active, setActive]=useState(routes.find((route)=>(route===location.pathname))||routes[0])

	const handleClick=React.useCallback(
		(route: string) =>()=> {
			setActive(route);
		},
		[setActive],
	)

	return(
		<ul className={styles.authNav}>
			{routes.map((route) => (
				<li
					className={cn(styles.element)}
					key={route}
					style={{ borderBottom:  active === route?
						'3px solid rgb(159, 126, 185)': 'none'}}
				>
					<Link
							to={route}
							className={styles.link}
							onClick={handleClick(route)}
					>
						{route}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default AuthNav;
