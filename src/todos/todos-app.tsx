import * as React from 'react';
//import {hot} from 'react-hot-loader';

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


import {useRouteMatch } from "react-router-dom";


import './todos-app.scss';
import SwitchRoutes from '../utils/SwitchRoutes';

const TodosApp : React.FC= () => {
  let { path } = useRouteMatch();
  //AppRoutes.map((route: AppRoute) => (console.log(`${path}${route.path}`)));
  console.log(path)
  
  return (
    <div className="app-form">
            <AppHeader/>
            <Navigation/>
            <AddItem/>
            <SwitchRoutes routes={AppRoutes} cur_path={path} />
    </div>
  );
}

export default TodosApp;

// { AppRoutes.map((route: AppRoute) => (
//   <Route  
//       exact={route.exact} 
//       path={`${path}${route.path}`} 
//       component={route.component}
//       key={route.path} />))
// }