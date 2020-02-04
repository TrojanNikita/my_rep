import * as React from 'react';
import LeftMenu from './left-menu/left-menu';
import TodosApp from './../todos/todos-app';
import Gallery from './../gallery/gallery-app';

import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";

const RootView: React.FC<{}> = () => {
  let location=useLocation();
  let { path } = useRouteMatch();
  console.log(path)
  return (
    <div className="app-main">
        <LeftMenu/>
        <Switch>
          <Route path={`${path}todos(/active)?`}>
            <TodosApp/>
          </Route>
          
          <Route path={`${path}gallery`} component={Gallery} />
        </Switch>
    </div>
  );
};

export default RootView;
