import * as React from 'react';
import {
	Switch,
	Route,
	Redirect,
	useHistory,
} from 'react-router-dom';
import AuthContent from '../containers/AuthContent';
import {BASE_URL, sections} from '../constants/main';



export default function Routes() {
	
	return (
		<>
			<Switch>
				<Route
					exact
					path={sections.map(section=>section.path)}
				>
					<AuthContent />
				</Route>
				<Route>
					<Redirect to={BASE_URL} />
				</Route>
			</Switch>
		</>
	);
}