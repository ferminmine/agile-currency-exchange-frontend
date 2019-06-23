import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

const REDIRECT_URL = '/login';

const PrivateRoute = ({ component: Component, path, ...rest }) => (
  <Route
    path={path}
    render={propsRouter => {
      return localStorage.getItem('authenticationToken') ? (
        <Component {...propsRouter} {...rest} />
      ) : (
        <Redirect to={REDIRECT_URL} />
      );
    }}
  />
);

export default PrivateRoute;
