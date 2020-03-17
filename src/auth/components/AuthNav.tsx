import * as React from 'react';
import { Link,  useLocation, useHistory } from "react-router-dom";
import cn from 'classnames';
import styles from './auth-nav.scss';
import {sections} from '../constants/main';
import { AuthNames } from '../constants/main';

//useLocation вместо withRouter и тд
const TABS_TITLES = {
	[AuthNames.login]: 'Log In',
	[AuthNames.signup]: 'Sign Up',
};

const AuthNav=()=>{

	const {useState} = React;
	const location = useLocation();

	const [active, setActive]=useState(sections.find((section)=>(section.path===location.pathname))||sections[0])

	const handleClick=React.useCallback(
		(section) =>()=> {
			setActive(section);
		},
		[setActive],
	)

	return(
		<ul className={styles.authNav}>
			{sections.map((section) => (
				<li
					className={cn(styles.element)}
					key={section.name}
					style={{ borderBottom:  active === section?
						'3px solid rgb(159, 126, 185)': 'none'}}
				>
					<Link
							to={section.path}
							className={styles.link}
							onClick={handleClick(section)}
					>
						{TABS_TITLES[section.name]}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default AuthNav;
