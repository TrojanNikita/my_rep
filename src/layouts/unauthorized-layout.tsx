import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import {useRouteMatch} from 'react-router'
import Login from '../auth/login'

const UnauthorizedLayout = () => {
  let match=useRouteMatch();
  return(
  <div className="app unauthorized-layout">
    <Switch>
      <Route path={match.url} component={Login} />
    </Switch>
  </div>
)};

export default UnauthorizedLayout;