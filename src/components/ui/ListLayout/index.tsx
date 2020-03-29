import * as React from 'react';
import cn from 'classnames';
import styles from './ListLayout.scss';

export type ListLayoutPropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
	elementProps?: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
	children: React.ReactNode;
	elementWidthPercents: number;
	elementProportion?: number;
};

const ELEMENT_PADDING = 20;

function useProportionsSizes(
	elementRef: React.RefObject<HTMLDivElement>,
	childrenCount: number,
	elementWidthPercents: number,
	elementProportion?: number,
) {
	React.useEffect(() => {
		function onResize(elements: {target: HTMLElement; contentRect: DOMRect}[]) {
			if (elementProportion && elements[0]) {
				const containerRect = elements[0].contentRect;

				let elementWidth = containerRect.width * elementWidthPercents * 0.01 + ELEMENT_PADDING * 2;
				const elementHeight = elementWidth / elementProportion;
				let numberOfLines = Math.floor(containerRect.height / elementHeight);

				if (numberOfLines === 0) {
					elementWidth = containerRect.height * elementProportion;
					numberOfLines = 1;
				}

				const firstChild = elements[0].target.firstElementChild as HTMLElement;
				if (firstChild) {
					firstChild.style.width = `${
						elementWidth * Math.ceil(childrenCount / numberOfLines)
					}px`;
					firstChild.childNodes.forEach((node) => {
						(node as HTMLElement).style.width = `${elementWidth}px`;
						(node as HTMLElement).style.padding = `${ELEMENT_PADDING}px`;
					});
				}
				elements[0].target.querySelectorAll(`.${styles.element}`).forEach((element) => {
					(element as HTMLElement).style.opacity = '1';
				});
			}
		}

		const resizeObserver = new (window as any).ResizeObserver(onResize);
		resizeObserver.observe(elementRef.current);

		return () => { resizeObserver.disconnect(); };
	}, [childrenCount, elementWidthPercents, elementProportion]);
}

const ListLayout = ({
	className,
	children,
	elementWidthPercents,
	elementProportion,
	elementProps: { className: elementClassName } = {},
	...otherProps
}: ListLayoutPropsType) => {
	const wrapperRef = React.useRef<HTMLDivElement>(null);
	useProportionsSizes(
		wrapperRef,
		React.Children.count(children),
		elementWidthPercents,
		elementProportion,
	);

	return (
		<div {...otherProps} ref={wrapperRef} className={styles.wrapper}>
			<ul className={cn(className, styles.list)}>
				{React.Children.map(children, (child) => (
					<li className={cn(elementClassName, styles.element)} style={{ opacity: 0 }}>
						{child}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListLayout;
