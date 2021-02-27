import { Route } from 'react-router-dom';
import React from 'react';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} {...route} />
      )}
    />
  );
};

export default RouteWithSubRoutes;
