import * as React from 'react';
import styles from './switcher.scss';

interface ISwitchComponentProps {
	children: React.FunctionComponent;
}

function SwitchComponentWrapper({
	children: Content,
}:ISwitchComponentProps) {



	return (
		<div>
		<Content/>
		</div>
	);
}

export default (SwitchComponentWrapper);

{/* <div className={styles.switcher} style={{flexDirection: location}}>
			<div className={styles.switcherLast}><Last onClick={onLastClick}/></div>
			<Content param={switcher} />
			<div className={styles.switcherNext}><Next onClick={onNextClick}/></div>
		</div> */}

		// return (
		// 	Content
		// );