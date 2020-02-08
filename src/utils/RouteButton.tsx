import * as React from 'react';
import { useHistory } from 'react-router';

type CommonProps = {
	children: React.FunctionComponent<{onClick: () => void; disabled?: boolean}>;
	timeout?: number;
}

function RouteButton(props: CommonProps & {redirectTo: string}): JSX.Element;
function RouteButton(props: CommonProps & {goBack: boolean}): JSX.Element;
function RouteButton(props: CommonProps & {withHistoryCallback: (history: ReturnType<typeof useHistory>) => void}): JSX.Element;
function RouteButton({
	children: Button,
	redirectTo,
	timeout,
	goBack,
	withHistoryCallback,
}: any) {
	const [isTimerWasFired, setTimerWasFired] = React.useState(false);
	const history = useHistory();

	const handleClick = React.useCallback(() => {
		if (redirectTo) history.push(redirectTo);
		else if (goBack) history.goBack();
		else if (withHistoryCallback) withHistoryCallback(history);
	}, [history, redirectTo, goBack, withHistoryCallback]);

	React.useEffect(() => {
		if (timeout) {
			if (isTimerWasFired) {
				handleClick();
			} else {
				const timeoutId = setTimeout(() => {
                    setTimerWasFired(true);
				}, timeout);

				return () => clearTimeout(timeoutId);
			}
		}
	}, [timeout, handleClick]);

	return (
		<Button onClick={handleClick} />
	);
}

export default RouteButton;
