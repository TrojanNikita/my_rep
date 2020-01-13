import * as React from 'react';
import {MenuItem} from './left-menu-types';
import {useHistory} from 'react-router-dom';

interface Props {
	item: MenuItem;
}

const LeftMenuItem = ({item}: Props) => {

	const history = useHistory();

	return (
		<React.Fragment>
			<button type="button"
				className = "left-menu-item"
				onClick = { () => history.push(item.path) }>
				<i className = {`left-menu-item__icon ${item.icon}`} />
			</button>
		</React.Fragment>
	);
};

export default React.memo(LeftMenuItem);
