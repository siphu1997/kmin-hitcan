import React, { lazy, useEffect, useState } from "react";
import routes from "configs/configureRoute";
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from "commons/RouteWithSubRoutes";
import LoadingCircle from "commons/LoadingCircle";
import CandidatePage from "commons/CandidatePage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sideLeft, setSideLeft] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading) {
    return <LoadingCircle />;
  }
  const handleDrawerLeftOpen = () => {
    setSideLeft(true);
  };
  const handleDrawerLeftClose = () => {
    setSideLeft(false);
  };
  return (
    <CandidatePage
      handleDrawerLeftOpen={handleDrawerLeftOpen}
      handleDrawerLeftClose={handleDrawerLeftClose}
      sideLeft={sideLeft}
    >
      {/* {isSettingToken ? (
        'Loading Token'
      ) : ( */}
      <Switch>
        {routes &&
          routes.map((route, index) => (
            <RouteWithSubRoutes key={`admin-${index}`} {...route} />
          ))}
      </Switch>
      {/* )}
      <Notifier
        notifications={notifications}
        removeSnackbar={adminPageActions.removeSnackbar}
      /> */}
    </CandidatePage>
  );
}
