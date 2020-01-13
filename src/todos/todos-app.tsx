import * as React from 'react';
import {hot} from 'react-hot-loader';

//Роутинг
import { Route, Switch } from "react-router-dom";
import history from './constants/history';
import { AppRoutes } from './routes/app-routes';

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

const TodosApp : React.FC= () => {
  return (
    <div className="app-form">
            <AppHeader/>
            <Navigation/>
            <AddItem/>
            <Switch>
              { AppRoutes.map((route: AppRoute) => (
                  <Route  exact={route.exact} 
                          path={route.path} 
                          component={route.component}
                          key={route.path} />))
              }
            </Switch>
    </div>
  );
}

export default TodosApp;
