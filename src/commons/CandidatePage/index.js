import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SidebarLeft from "../SidebarLeft";
import CandidateHeader from "commons/CandidateHeader";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: "24px 36px 24px 10px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));
const CandidatePage = (props) => {
  const classes = useStyles();
  const { sideLeft, handleDrawerLeftOpen, handleDrawerLeftClose } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <CandidateHeader
        sideLeft={sideLeft}
        handleDrawerLeftOpen={handleDrawerLeftOpen}
      />
      <SidebarLeft
        sideLeft={sideLeft}
        handleDrawerLeftClose={handleDrawerLeftClose}
      />
      {/* <NotificationCtn /> */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: sideLeft
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
    </div>
  );
};

export default CandidatePage;
