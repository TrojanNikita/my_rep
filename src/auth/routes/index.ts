import { LOGIN, SIGNUP } from '../constants/routes';
import {Route} from '../../types/Route';
import * as containers from './../containers';

import * as names from '../constants/names';


export const Routes: Route[] = [
    {
        id:'1',
        path: LOGIN,
        component: containers.Login,
        description: names.LOGIN,
        exact: true
    },
    {
        id:'2',
        path: SIGNUP,
        component: containers.Signup,
        description: names.SIGNUP,
        exact: false
    }
];