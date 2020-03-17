import * as React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import {Route as IRoute} from './../types/Route';

interface ISwitch{
	routes: IRoute[];
	children: React.ReactNode;
}

const SwitchRoutes = ({routes, children}:ISwitch)=>{

	let {path} = useRouteMatch();

	return (
		<Switch>
		{ routes.map((route: IRoute) => (
			<Route
				exact={route.exact}
				path={`${path}${route.path}`}
				key={route.path}
			>
				{children}
			</Route>))
		}
		</Switch>
	);
};

export default React.memo(SwitchRoutes);
