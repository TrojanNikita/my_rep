import * as React from 'react';
import styles from './switcher.scss';

interface ISwitchComponentProps {
	location?: "row" | "column";
	children: React.FunctionComponent<{param: number}>;
	lastNode: React.FunctionComponent<{onClick: () => void}>;
	nextNode: React.FunctionComponent<{onClick: () => void}>;
	max_params: number;
}

export default function SwitchComponentWrapper({
	location="column",
	children: Content,
	lastNode: Last,
	nextNode: Next,
	max_params: maxParam,
}:ISwitchComponentProps) {

	const [switcher, setSwitcher] = React.useState<number>(0);

	const onLastClick = React.useCallback(() => {
		switcher!==0
		? setSwitcher(switcher-1)
		:setSwitcher(maxParam-1);
	}, [switcher]);

	const onNextClick = React.useCallback(() => {
		switcher===maxParam-1
		? setSwitcher(0)
		:setSwitcher(switcher+1);
	}, [switcher]);

	return (
		<div className={styles.switcher} style={{flexDirection: location}}>
			<div className={styles.switcherLast}><Last onClick={onLastClick}/></div>
			<Content param={switcher} />
			<div className={styles.switcherNext}><Next onClick={onNextClick}/></div>
		</div>
	);
}