import React, { lazy, useEffect, useState } from "react";
import routes from "../config/configureRoute";
import { Route, Switch } from "react-router-dom";
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";
import { Box, makeStyles } from "@material-ui/core";

import Loading from "../components/Layout/Loading";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import socketService from "../config/socketService";
import { useUserState } from "../context/UserContext";
// import { useUserState } from "../context/UserContext";

const NoMatch = lazy(() => import("./NoMatch"));
const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

export default function App() {
  const { userData } = useUserState();
  const classes = useStyles();

  const [isLoading] = useState(false);

  useEffect(() => {
    socketService.initSocket();
    return () => socketService.disconnectSocket();
    //
  }, []);

  useEffect(() => {
    if (userData?._id) {
      socketService.emitEvent("INIT_ID", {
        id: userData?._id,
      });
    }
  }, [userData?._id]);

  return (
    <Box>
      {isLoading ? (
        <Box minHeight="100vh" display="flex">
          <Loading />
        </Box>
      ) : (
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Header />
          <div className={classes.offset} />
          <Box flexGrow="1">
            <React.Suspense fallback={<Loading />}>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
                <Route path="*" component={NoMatch} />
              </Switch>
            </React.Suspense>
          </Box>
          <Footer />
        </Box>
      )}
    </Box>
  );
}
