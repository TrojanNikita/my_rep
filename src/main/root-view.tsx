import * as React from 'react';
import LeftMenu from './left-menu/left-menu';
import TodosApp from './../todos/todos-app';

import { Route, Switch, Router } from "react-router-dom";

const RootView: React.FC<{}> = () => {
  return (
    <div className="app-main">
        <LeftMenu/>
        <Switch>
          <Route path="/todos" exact component={TodosApp} />
        </Switch>
    </div>
  );
};

export default RootView;
