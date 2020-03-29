import * as React from 'react';
import cn from 'classnames';
import withShowError from './withShowError';
import styles from './Input.scss';

export type inputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({ type = 'text', className, ...otherProps }: inputPropsType) => (
	<input
		type={type}
		className={cn(className, styles.input)}
		{...otherProps}
	/>
);

export default withShowError(Input);
