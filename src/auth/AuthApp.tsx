import * as React from 'react';
import AuthNav from './components/AuthNav';

import pageStyles from '../styles/pages.scss';
import styles from './auth-app.scss';
import Routes from './routes/Routes';
 

const AuthApp = () => {



	return (
		<main className={pageStyles.pageContainer}>
			<div className={styles.authPageCenter}>
				<div className={styles.authPageCenterTitle}>
					Welcome ...
				</div>
				<div className={styles.authPageCenterNav}>
					<AuthNav />
				</div>
				<div className={styles.authPageCenterContent}>
					<Routes />
				</div>
			</div>
		</main>
)};

export default AuthApp;