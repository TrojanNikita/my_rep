import * as React from 'react';
import { useLocation, useHistory } from 'react-router';
import { IWithKind } from '../../ui/Tabs/withKind';
import { IWithChildrenProvider } from '../../ui/Tabs/withChildrenProvider';
import { login } from '../constants/main';
import {sections} from '../constants/main';


interface ISwitchComponentProps {
	chldren: React.FunctionComponent<{param?:number}>;
	overlayNode: React.FunctionComponent<{onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void}>;
}
//, 	

const SWITCH_TITLES = [
	[login.email],
	[login.phone],
];

export default function SwitchComponentWrapper({
	chldren:Content, overlayNode:Switcher}: 
ISwitchComponentProps) {
	
	let p=0;

	const onLastClick = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		p===SWITCH_TITLES.length? --p:SWITCH_TITLES.length;
	}, []);
	const onNextClick = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		p===SWITCH_TITLES.length? 0:++p;
	}, []);



	return (
		<>
			<Switcher onClick={onLastClick}/>
			<Content
				param={p}
			/>
			<Switcher onClick={onNextClick}/>
		</>
	);
}


{/* <Switcher onClick={onLastClick}/>

<Switcher onClick={onNextClick}/> */}