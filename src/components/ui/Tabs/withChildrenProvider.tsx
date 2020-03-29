import * as React from 'react';
import cn from 'classnames';
import styles from './Tabs.scss';

type AllowedElements = keyof Pick<HTMLElementTagNameMap, 'button' | 'a' | 'div' | 'span'>

export interface ITab {
	as?: AllowedElements;
	isActive?: boolean;
	htmlAttributes: React.HTMLAttributes<HTMLElement>;
}

export interface IWithChildrenProvider {
	as?: AllowedElements;
	tabs?: ITab[];
	activeIndex?: number;
	onSelectTab?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const withChildrenProvider = (WrappedComponent: React.FunctionComponent<React.HTMLAttributes<HTMLElement>>) => ({
	as = 'button',
	tabs,
	activeIndex,
	onSelectTab,
	...otherProps
}: IWithChildrenProvider) => (tabs
	? (
		<WrappedComponent {...otherProps}>
			{tabs.map((tab, index) => {
				const Component = tab.as || as;

				return (
					<Component
						{...tab.htmlAttributes}
						key={index}
						onClick={tab.htmlAttributes.onClick || onSelectTab}
						className={cn(styles.tab, {
							[styles.tabActive]: Number.isFinite(activeIndex as number)
								? activeIndex === index
								: tab.isActive,
						})}
					>
						{tab.htmlAttributes.children}
					</Component>
				);
			})}
		</WrappedComponent>
	)
	: <WrappedComponent {...otherProps} />
);
