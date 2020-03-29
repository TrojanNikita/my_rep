import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from '../pages/AuthApp';


import {BASE_URL, URLS as AUTH_URLS} from '../constants/main';

const Routes = (
	<Switch>
		<Route exact path={AUTH_URLS.map(URL=>URL.path)} component={AuthPage} />
		<Redirect to={BASE_URL} />
	</Switch>
);

export default Routes;

//Заюзать в дальнейшем что-то такое, как ниже

// import * as React from 'react';
// import { Route } from 'react-router-dom';
// import { Switch, Redirect } from 'react-router';
// import pages from 'app/pages';
// import { useSelector } from 'react-redux';
// import { getKioskLogInStatus } from 'app/selectors/common/Kiosk';
// import StyleGuidePage from 'app/pages/StyleGuidePage';

// function Routes() {
// 	const logInStatus = useSelector(getKioskLogInStatus);

// 	return (
// 		<Switch>
// 			<Route exact path="/init" component={pages.make('InitPage')} />
// 			<Route exact path="/" component={pages.make('StartScreen')}>
// 				{logInStatus === 'unknown' && <Redirect to="/init" />}
// 			</Route>
// 			<Route exact path="/payment" component={pages.make('PaymentPage')} />
// 			<Route exact path="/booking" component={pages.make('BookingPage')} />
// 			<Route exact path="/booking/process" component={pages.make('ProcessBookingPage')} />
// 			<Route exact path="/booking/print" component={pages.make('PrintBookingPage')} />
// 			<Route exact path="/booking/error" component={pages.make('BookingErrorPage')} />
// 			<Route exact path="/payment/process" component={pages.make('ProcessPaymentPage')} />
// 			<Route path="/auth" component={pages.make('AuthPage')} />
// 			<Route path="/schedule" component={pages.make('SchedulePage')} />
// 			<Route path="/releases/:releaseId" component={pages.make('ReleasePage')} />
// 			<Route path="/seances/:seanceId/seats" component={pages.make('HallSchemaPage')} />
// 			<Route exact path="/print_ticket" component={pages.make('PrintTicketPage')} />
// 			<Route exact path="/print_ticket/order" component={pages.make('PrintTicketOrderPage')} />
// 			<Route exact path="/print_ticket/print" component={pages.make('PrintTicketPrintPage')} />
// 			<Route path="/style_guide" component={StyleGuidePage} />
// 			<Route render={() => <Redirect to="/" />} />
// 		</Switch>
// 	);
// }

// export default React.memo(Routes);
