import * as React from 'react';
import AuthNav from './components/AuthNav';

import pageStyles from '../styles/pages.scss';
import styles from './auth-app.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContent from './containers/AuthContent';
import {BASE_URL} from './constants/url';

const AuthApp = () => {

	const routes: string[]=[`${BASE_URL}`,`${BASE_URL}/sign`];

	return (
		<main className={pageStyles.pageContainer}>
			<div className={styles.authPageCenter}>
				<div className={styles.authPageCenterTitle}>
					Welcome ...
				</div>
				<div className={styles.authPageCenterNav}>
					<AuthNav routes={routes}/>
				</div>
				<div className={styles.authPageCenterContent}>
					<Switch>
						<Route
							exact
							path={routes}
						>
							<AuthContent />
						</Route>
						<Route>
							<Redirect to={BASE_URL} />
						</Route>
					</Switch>
				</div>
			</div>
		</main>
)};

export default AuthApp;