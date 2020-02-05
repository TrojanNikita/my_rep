import * as React from 'react';
import LeftMenu from './left-menu/left-menu';
import TodosApp from './../todos/todos-app';
import Gallery from './../gallery/gallery-app';

import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";

const RootView: React.FC<{}> = () => {
  let { path } = useRouteMatch();

  return (
    <div className="app-main">
        <LeftMenu/>
        <Switch>
          <Route path={`${path}todos`} component={TodosApp}/>          
          <Route path={`${path}gallery`} component={Gallery} />
        </Switch>
    </div>
  );
};

export default RootView;
