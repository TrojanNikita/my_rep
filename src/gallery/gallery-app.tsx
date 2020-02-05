import * as React from 'react';
import {useRouteMatch, Route, Switch, Link} from 'react-router-dom';
import One from './one';
import Two from './two';

const GalleryApp: React.FC<{}> = () => {
  let { path,url } = useRouteMatch();

  debugger
  return (
    <div className="app-main">
        <Link to={`${url}/1`}>One</Link>
        <Link to={`${url}/2`}>Two</Link>
        <Switch>
          <Route path={`${path}/1`} component={One}/>          
          <Route path={`${path}/2`} component={Two} />
        </Switch>
    </div>
  );
};

export default GalleryApp;
