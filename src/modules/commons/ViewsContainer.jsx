import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing';

import NotFound from './NotFound';

const ViewsContainer = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route component={NotFound} />
  </Switch>
);

export default ViewsContainer;
