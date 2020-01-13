import * as React from 'react';
import {hot} from 'react-hot-loader';
import LeftMenu from './main/left-menu/left-menu';

//Роутинг
import { Route, Switch, Router } from "react-router-dom";




const App : React.FC<{}>= () => {
  return (
    <div className="app-main">
        <LeftMenu/>
    </div>
  );
}

export default App;
