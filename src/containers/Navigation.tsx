import * as React from 'react';
import { useLocation, useHistory } from 'react-router';
import { IWithKind } from '../components/ui/Tabs/withKind';
import { IWithChildrenProvider } from '../components/ui/Tabs/withChildrenProvider';
import {Route} from '../types/Route'

type Children = React.FunctionComponent<IWithChildrenProvider & IWithKind & React.HTMLAttributes<HTMLElement>>;

export default function Navigation({
	children: NavView,
	URLS,
}: {children: Children, URLS: Route[]}) {
	const location = useLocation();
	const history = useHistory();

	const handleTabClick = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		const { value } = (event.target as HTMLButtonElement).dataset;
		if (!value) return;

		history.push(value);
	}, [history]);

	const navTabs = React.useMemo(() => URLS.map((tab) => ({
		htmlAttributes: {
			'data-value': tab.path,
			children: tab.description,
			href: tab.path,
		},
	})), [URLS]);

	return (
		<NavView
			as="a"
			kind="big"
			tabs={navTabs}
			activeIndex={URLS.findIndex((tab) => tab.path === location.pathname)}
			onSelectTab={handleTabClick}
		/>
	);
}
