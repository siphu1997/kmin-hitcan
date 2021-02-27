import { Route } from 'react-router-dom';
import React from 'react';
import AuthWrapper from 'screens/AuthWrapper';

const RouteWithSubRoutes = (route) => {
  return (
    <AuthWrapper isAuth={route.auth}>
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} {...route} />
        )}
      />
    </AuthWrapper>
  );
};

export default RouteWithSubRoutes;
