import * as React from 'react';

import pageStyles from '../styles/pages.scss';
import styles from './auth-app.scss';
import Routes from './routes/Routes';
import Navigation from './containers/Navigation';
import Tabs from '../ui/Tabs';
 

const AuthApp = () => {

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
					<Routes />
				</section>
			</div>
		</main>
)};

export default AuthApp;