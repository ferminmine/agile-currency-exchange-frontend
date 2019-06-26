import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Landing from '../landing/Landing';
import Login from '../login/Login';
import Signup from '../signup/Signup';

import NotFound from './NotFound';

const ViewsContainer = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <PrivateRoute exact path='/secret' component={Landing} />
    <Route component={NotFound} />
  </Switch>
);

export default ViewsContainer;
