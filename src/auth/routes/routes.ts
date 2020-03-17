import { LOGIN, SIGNUP } from '../constants/routes';
import {Route} from '../../types/Route';

import * as names from '../constants/names';


export const Routes: Route[] = [
	{
		id:'1',
		path: LOGIN,
		description: names.LOGIN,
		exact: true
	},
	{
		id:'2',
		path: SIGNUP,
		description: names.SIGNUP,
		exact: false
	}
];