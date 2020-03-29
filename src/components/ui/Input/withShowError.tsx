import * as React from 'react';
import { inputPropsType } from './index';
import styles from './Input.scss';

const withShowError = (
	component: (props: inputPropsType) => React.ReactNode,
// eslint-disable-next-line react/display-name
) => (props: inputPropsType & {'data-error'?: string}) => (
	<div className={styles.withError} style={props.style} data-error={props['data-error']}>
		{component(props)}
	</div>
);

export default withShowError;
