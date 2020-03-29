import * as React from 'react';
import styles from './switcher.scss';
import cn from 'classnames';

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
	const [animation, setAnimation] = React.useState<string>(styles.switcherContent);

	// React.useEffect(() => {
	// 	setAnimation(styles.switcherContentInit);
	// }, [switcher, animation])

	const onLastClick = React.useCallback(() => {
		setAnimation(styles.switcherContentLeft);
		switcher!==0
		? setSwitcher(switcher-1)
		: setSwitcher(maxParam-1);
	}, [switcher]);

	const onNextClick = React.useCallback(() => {
		setAnimation(styles.switcherContentRight);
		switcher===maxParam-1
		? setSwitcher(0)
		:setSwitcher(switcher+1);
	}, [switcher]);

	return (
		<div className={cn(styles.switcher)} style={{flexDirection: location}}>
			<div className={styles.switcherLast}><Last onClick={onLastClick}/></div>
			<div className={animation}><Content param={switcher} /></div>
			<div className={styles.switcherNext}><Next onClick={onNextClick}/></div>
		</div>
	);
}