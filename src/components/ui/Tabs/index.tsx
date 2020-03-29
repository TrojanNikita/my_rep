import * as React from 'react';
import cn from 'classnames';
import withKind from './withKind';
import styles from './Tabs.scss';
import { withChildrenProvider } from './withChildrenProvider';

const Tabs = ({
	className,
	children,
	...otherProps
}: React.HTMLAttributes<HTMLElement>) => (
	<ul className={cn(className, styles.tabs)} {...otherProps}>
		{React.Children.map(children, (child) => (
			<li className={styles.tabWrapper}>
				{child}
			</li>
		))}
	</ul>
);

export default withChildrenProvider(withKind(Tabs));
