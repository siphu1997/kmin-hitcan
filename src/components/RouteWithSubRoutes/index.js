import { Route } from 'react-router-dom';
import React from 'react';
import AuthWrapper from 'screens/AuthWrapper';
import { Container } from '@material-ui/core';

const RouteWithSubRoutes = (route) => {
  return (
    <AuthWrapper isAuth={route.auth}>
      <Container
        maxWidth={route.maxWidth || 'lg'}
        disableGutters={!!route.disableGutters}
      >
        <Route
          path={route.path}
          exact={route.exact}
          render={(props) => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} {...route} />
          )}
        />
      </Container>
    </AuthWrapper>
  );
};

export default RouteWithSubRoutes;
