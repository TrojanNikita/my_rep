import * as React from 'react';
import cn from 'classnames';
import styles from './Tabs.scss';

export interface IWithKind extends Pick<React.HTMLAttributes<HTMLElement>, 'className'> {
	kind?: 'big' | 'small';
}

const withKind = (WrappedComponent: React.FunctionComponent<React.HTMLAttributes<HTMLElement>>) => ({
	kind = 'small',
	className,
	...otherProps
}: IWithKind) => (
	<WrappedComponent
		{...otherProps}
		className={cn(className, {
			[styles.kindSmall]: kind === 'small',
			[styles.kindBig]: kind === 'big',
		})}
	/>
);

export default withKind;
