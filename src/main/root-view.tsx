import * as React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";


import LeftMenu from './left-menu/left-menu';
import TodosApp from './../todos/todos-app';
import Gallery from './../gallery/gallery-app';

//main page (left menu and switched components)


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
