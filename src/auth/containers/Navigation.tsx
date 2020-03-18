import * as React from 'react';
import { useLocation, useHistory } from 'react-router';
import { IWithKind } from '../../ui/Tabs/withKind';
import { IWithChildrenProvider } from '../../ui/Tabs/withChildrenProvider';
import { AuthNames } from '../constants/main';
import {sections} from '../constants/main';

type Children = React.FunctionComponent<IWithChildrenProvider & IWithKind & React.HTMLAttributes<HTMLElement>>;

const TABS_TITLES = {
	[AuthNames.login]: 'Log In',
	[AuthNames.signup]: 'Sign Up',
};

export default function Navigation({
	children: NavView,
}: {children: Children}) {
	const location = useLocation();
	const history = useHistory();

	const handleTabClick = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		const { value } = (event.target as HTMLButtonElement).dataset;
		if (!value) return;

		history.push(value);
	}, [history]);

	const navTabs = React.useMemo(() => sections.map((tab) => ({
		htmlAttributes: {
			'data-value': tab.path,
			children: TABS_TITLES[tab.name],
			href: tab.path,
		},
	})), [sections]);

	return (
		<NavView
			as="a"
			kind="big"
			tabs={navTabs}
			activeIndex={sections.findIndex((tab) => tab.path === location.pathname)}
			onSelectTab={handleTabClick}
		/>
	);
}
