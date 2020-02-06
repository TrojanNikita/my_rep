import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthUserProvider } from '../utils/AuthUser'
import AuthorizedRoute from '../utils/AuthorizedRoute'
import AuthApp from '../auth/auth-app'
import RootView from '../main/root-view';


//root routes and redirect on auth

const routes = (
  <React.Fragment>
      <AuthUserProvider>
        <Switch>
          <Route path="/auth" component={AuthApp}/>
          <AuthorizedRoute  path="/" component={RootView}/>
          <Redirect to="/" />
        </Switch>
      </AuthUserProvider>
  </React.Fragment>
);

export default routes;

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
