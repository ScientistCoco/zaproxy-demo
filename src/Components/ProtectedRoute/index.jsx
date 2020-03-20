import React from 'react';
import { getSession } from '../../utilities';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getSession()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

export default ProtectedRoute;