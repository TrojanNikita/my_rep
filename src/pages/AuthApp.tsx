import * as React from 'react';

import pageStyles from '../styles/pages.scss';
import styles from './auth-app.scss';
import Navigation from '../containers/Navigation';
import Tabs from '../components/ui/Tabs';
import Button from '../components/ui/Button';
import { useLocation } from 'react-router';
import AuthPopup from './../containers/AuthPopup';
import Switcher from '../components/ui/Switcher';
import ClickableIcon from "../components/ui/ClickableIcon";
import {logins} from '../constants/data';

const AuthApp = () => {

	const location = useLocation();
	const buttonLabel = location.pathname === '/auth/sign' ? 'Sign Up' : 'Sign In';

	return (
		<main className={pageStyles.pageContainer}>
			<div className={styles.authPageCenter}>
				<div className={styles.authPageCenterTitle}>
					Welcome ...
				</div>
				<nav className={styles.authPageCenterNav}>
					<Navigation>{Tabs}</Navigation>
				</nav>
				<section className={styles.authPageCenterContent}>
				<Switcher
					location='row'
					lastNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
					nextNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
					max_params={logins.length}
				>
					{({param}) => (
						<AuthPopup
							login={param}
						/>
					)}
				</Switcher>
					<Button
						kind='default'
						type='button'
					>
						{buttonLabel}
					</Button>
				</section>
			</div>
		</main>
)};

export default AuthApp;