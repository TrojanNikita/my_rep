import * as React from 'react';
import cn from 'classnames';
import styles from './Footer.scss';

const Footer = ({
	children, className, ...otherProps
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => (
	<footer className={cn(className, styles.footer)} {...otherProps}>
		{children}
	</footer>
);

export default Footer;