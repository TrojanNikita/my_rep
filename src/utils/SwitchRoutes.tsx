import * as React from 'react'
import { Switch, Route } from 'react-router-dom';
import {Route as IRoute} from './../types/Route';

interface ISwitch{
	routes: IRoute[];
	cur_path:string;
}

const SwitchRoutes = ({routes, cur_path}:ISwitch)=>{

	return (
		<Switch>
		{ routes.map((route: IRoute) => (
			<Route
				exact={route.exact}
				path={`${cur_path}${route.path}`}
				component={route.component}
				key={route.path} />))
		}
		</Switch>
	);
};
 
export default React.memo(SwitchRoutes);
  