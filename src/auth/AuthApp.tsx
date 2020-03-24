import * as React from 'react';

import pageStyles from '../styles/pages.scss';
import styles from './auth-app.scss';
import Routes from './routes/Routes';
import Navigation from './containers/Navigation';
import Tabs from '../ui/Tabs';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
import { getButtonName } from './selectors/auth';

const AuthApp = () => {

	const buttonLabel = useSelector(getButtonName);

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