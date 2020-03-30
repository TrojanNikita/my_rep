import * as React from 'react';
import Navigation from '../containers/Navigation';
import styles from './auth-app.scss';
import Tabs from '../components/ui/Tabs';
import { Route } from '../types/Route';

export interface IAppProps {
}

const styleURLS: Route[] = [
	{
		name: 'button',
		description: 'Button',
		path: 'button',
	},
	{
		name: 'input',
		description: 'Input',
		path: 'input',
	},
];

export default function StyleGuide (props: IAppProps) {
	return (
		<main>
			<nav>
				<Navigation URLS={styleURLS}>{Tabs}</Navigation>
			</nav>
			<section>
				StyleGuide
			</section>
		</main>
	);
}
