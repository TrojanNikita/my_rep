import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import {useRouteMatch} from 'react-router';
import Login from './components/login';
import { Routes as AuthRoutes } from './routes';


import {Route as AuthRoute} from './models/Route';


const AuthApp = () => {

  let {path} = useRouteMatch();

  return (
    <div className="auth">
      <Switch>
      { AuthRoutes.map((route: AuthRoute) => (
          <Route  
              exact={route.exact} 
              path={`${path}${route.path}`} 
              component={route.component}
              key={route.path} />))
      }
      </Switch>
    </div>
)};

export default AuthApp;