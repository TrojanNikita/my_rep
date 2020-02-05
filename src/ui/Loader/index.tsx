import * as React from 'react';
import GridLoader from './../../images/GridLoader';
import styles from './Loader.scss';

const Loader = () => (
	<div className={styles.loader}>
		<GridLoader />
	</div>
);

// customComponents.define(Loader, 'Loader');
export default Loader;