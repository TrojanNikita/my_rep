import * as React from 'react';
import {hot} from 'react-hot-loader';

import {Provider} from 'react-redux';
//Роутинг
import { Route, Switch, Router } from "react-router-dom";
import history from './constants/history';
import { AppRoutes } from './routes/app-routes';

import configStore from './../configStore';
//Типы
import {AppRoute} from './types';

//todos 
//props: activeCount
import AppHeader from './components/app-header/app-header';

//navigation: All, Active, Done
import Navigation from './components/navigation/navigation';

//Add new Item
import AddItem from './components/add-item/add-item';




import './todos-app.scss';
const store = configStore();

const App : React.FC= () => {
  return (
    <Provider store={store}>
    <div className="app-form">
      <Router history={history}>
        <div>
            <AppHeader/>
            <Navigation/>
            <AddItem/>
            <Switch>
              {
                AppRoutes.map((route: AppRoute) => (
                  <Route  exact={route.exact} 
                          path={route.path} 
                          component={route.component}
                          key={route.path} />))
              }
            </Switch>
        </div>
      </Router>
    </div>
    </Provider>
  );
}

export default hot(App);
