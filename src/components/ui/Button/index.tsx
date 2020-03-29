import * as React from 'react';
import cn from 'classnames';
import withKind, { IWithKind } from './withKind';
import styles from './Button.scss';

export interface IButtonWithKind extends IWithKind, React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...otherProps }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button type="button" className={cn(styles.button, className)} {...otherProps}>
		{children}
	</button>
);
Button.displayName = 'Button';

export default withKind(Button);