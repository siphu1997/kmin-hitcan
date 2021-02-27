import React, { lazy, useEffect, useState } from 'react';
import routes from 'config/configureRoute';
import { Route, Switch } from 'react-router-dom';
import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import LoadingBook from 'components/LoadingBook';
import LoadingCircle from 'components/LoadingCircle';

const NoMatch = lazy(() => import('./NoMatch'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading) {
    return <LoadingBook isFullScreen />;
  }
  return (
    <React.Suspense fallback={<LoadingCircle isFullScreen />}>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route path="*" component={NoMatch} />
      </Switch>
    </React.Suspense>
  );
}
