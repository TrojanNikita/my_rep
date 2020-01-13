import * as React from 'react';
import {MenuItem} from './left-menu-types';


interface Props {
	item:MenuItem;
}

export default function LeftMenuItem({item}: Props): React.ReactElement {
    return (
        <React.Fragment>
			<button type="button"
				className='left-menu-item'>
				<i className = {`left-menu-item__icon ${item.icon}`} />
			</button>
		</React.Fragment>
    )
}
