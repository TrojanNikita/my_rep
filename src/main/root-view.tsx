import * as React from 'react';
import {hot} from 'react-hot-loader';
import LeftMenu from './left-menu/left-menu';

//Роутинг
import { Route, Switch, Router } from "react-router-dom";

const RootView : React.FC<{}>= () => {
  return (
    <div className="app-main">
        <LeftMenu/>
    </div>
  );
}

export default RootView;
