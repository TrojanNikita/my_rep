import * as React from 'react';
import cn from 'classnames';
import BackButton from '../../../images/BackButton';
import styles from './InfoLine.scss';

type infoLinePropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	onBackClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | (() => void) | null ;
}

const InfoLine = React.memo(({
	children, className, onBackClick,
	title, subtitle,
}: infoLinePropsType) => {
    console.log(styles);
    return(
	<div
		className={cn(className, styles.infoLine, {
			[styles.infoLineTitle]: onBackClick,
		})}
	>
		<p className={styles.infoLineTitle}>{title}</p>
		{children}
	</div>
)});

InfoLine.displayName = 'InfoLine';

export default InfoLine;