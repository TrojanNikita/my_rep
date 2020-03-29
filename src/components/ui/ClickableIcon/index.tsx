import * as React from 'react';
import cn from 'classnames';
import styles from './ClickableIcon.scss';
import withSide, {IWithSide} from './withSide';

export interface IClickableIcon extends IWithSide, React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?:React.ReactNode;
	className?: string;
}

const ClickableIcon = ({ children, onClick, className }: IClickableIcon) => (
	<button className={cn(styles.cliclableIcon, className)} onClick={onClick}>
		{children}
	</button>
);
ClickableIcon.displayName = 'ClickableIcon';

export default withSide(ClickableIcon);