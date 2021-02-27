import React, { lazy } from 'react';
import routes from 'config/configureRoute';
import { Route, Switch } from 'react-router-dom';
import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import LoadingBook from 'components/LoadingBook';

const NoMatch = lazy(() => import('./NoMatch'));

export default function App() {
  return (
    <React.Suspense fallback={<LoadingBook isFullScreen />}>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route path="*" component={NoMatch} />
      </Switch>
    </React.Suspense>
  );
}
