import * as React from 'react';
import cn from 'classnames';
import styles from './Button.scss';

export interface IWithKind extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	kind?: 'default' | 'primary' | 'success' | 'danger' | 'secondary' | 'keyboard';
}

const withKind = (component: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>>) => ({
	kind = 'default',
	className,
	...otherProps
}: IWithKind) => {
	const buttonKindClass = React.useMemo(() => {
		switch (kind) {
			case 'default': return styles.buttonKindDefaultOnNavigation;
			case 'success': return styles.buttonKindSuccess;
			case 'primary': return styles.buttonKindSuccess;
			case 'secondary': return styles.buttonKindDefaultOnBackground;
			case 'danger': return styles.buttonKindDanger;
			case 'keyboard': return styles.buttonKindKeyboard;
			default: return '';
		}
	}, [kind]);

	return (
		component({
			...otherProps,
			className: cn(className, buttonKindClass),
		})
	);
};

export default withKind;