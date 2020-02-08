import * as React from 'react'
import {useRouteMatch} from 'react-router';
import Login from './components/login';
import { Routes as AuthRoutes } from './routes';
import SwitchRoutes from './../utils/SwitchRoutes';
import InfoLine from '../ui/InfoLine';
import AuthNav from './components/auth-nav';

import pageStyles from './../styles/pages.scss';
import styles from './auth-app.scss';

const AuthApp = () => {

  let {path} = useRouteMatch();

  return (
    <main className={pageStyles.pageContainer}>
        <InfoLine title={'Welcome to my site !'}/>
        <div className={styles.authPageCenter}>
            <div className={styles.authPageCenterTitle}>
                Welcome ...
            </div>
            <div className={styles.authPageCenterNav}>
                <AuthNav />
            </div>
            <SwitchRoutes routes={AuthRoutes} cur_path={path} />
        </div>
    </main>
)};

export default AuthApp;