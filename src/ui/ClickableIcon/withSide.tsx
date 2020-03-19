import * as React from 'react';
import cn from 'classnames';
import styles from './ClickableIcon.scss';

export interface IWithSide extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	horisont?: 'default' | 'left' | 'right';
	vertical?: 'default' | 'top' | 'bottom';
}

const withSide = (component: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>>) => ({
	horisont = 'default',
	vertical = 'default',
	className,
	...otherProps
}: IWithSide) => {
	const buttonHorisontClass = React.useMemo(() => {
		switch (horisont) {
			case 'default': return styles.cliclableIconSideDefaultOnHorisont;
			case 'left': return styles.cliclableIconSideLeft;
			case 'right': return styles.cliclableIconSideRight;
			default: return '';
		}
	}, [horisont]);
	const buttonVerticalClass = React.useMemo(() => {
		switch (vertical) {
			case 'default': return styles.cliclableIconSideDefaultOnVertical;
			case 'top': return styles.cliclableIconSideTop;
			case 'bottom': return styles.cliclableIconSideBottom;
			default: return '';
		}
	}, [vertical]);

	return (
		component({
			...otherProps,
			className: cn(className, buttonHorisontClass, buttonVerticalClass),
		})
	);
};

export default withSide;