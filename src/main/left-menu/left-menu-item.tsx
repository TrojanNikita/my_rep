import * as React from 'react';
import {MenuItem} from './left-menu-types';
import {useHistory, useRouteMatch} from 'react-router-dom';

interface Props {
	item: MenuItem;
}

const LeftMenuItem = ({item}: Props) => {

	const history = useHistory();
	const {url}=useRouteMatch();
	console.log(url)
	return (
		<React.Fragment>
			<button type="button"
				className = "left-menu-item"
				onClick = { () => history.push(`${url}${item.path}`) }>
				<i className = {`left-menu-item__icon ${item.icon}`} />
			</button>
		</React.Fragment>
	);
};

export default React.memo(LeftMenuItem);
