import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Box, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CandidateSidebarLeft from "commons/CandidateSidebarLeft";
import LogoUnig from "assets/svg/LogoUnig";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    overflow: "hidden",
    width: drawerWidth,
    zIndex: "1200",
    boxShadow: theme.boxShadow2,
    border: "none",
    [theme.breakpoints.up("md")]: {
      width: drawerWidth
    },
    [theme.breakpoints.down("md")]: {
      width: "100vw"
    }
  },
  PersistentDrawerLeftContentShift7: {
    position: "absolute"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(3, 1),
    ...theme.mixins.toolbar,
    justifyContent: "space-between"
  },
  logo: {
    padding: "5px 0",
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginLeft: "24px"
  },
  logoImg: {
    width: "100%"
  },
  NotificationsBtn: {
    "& svg": {
      fill: theme.color.secondary.main
    },
    "& .MuiBadge-badge": {
      border: "2px solid white",
      borderRadius: "50%",
      height: "24px",
      minWidth: "24px",
      fontSize: "8px",
      top: 2,
      right: 2,
      padding: "0"
    }
  }
}));
function SidebarLeft(props) {
  const { sideLeft } = props;
  const classes = useStyles();
  const [invisible] = React.useState(false);
  const handleClick = () => {
    props.openNotification();
    props.onUnreadNotifications();
  };
  return (
    <nav>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={sideLeft}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Box>
          <div className={classes.drawerHeader}>
            <Link to="/" className={classes.logo}>
              {/* <Logo /> */}
              {props.user?.avatar ? (
                <img src={props.user?.avatar} className={classes.logoImg}></img>
              ) : (
                <LogoUnig />
              )}
            </Link>
            <Box>
              <IconButton
                onClick={handleClick}
                aria-label="4 pending messages"
                className={classes.NotificationsBtn}
              >
                <Badge
                  badgeContent={props.unreadNotifications}
                  color="primary"
                  invisible={
                    props.unreadNotifications === 0 ? !invisible : invisible
                  }
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={props.handleDrawerLeftClose}>
                <ChevronLeftIcon />
              </IconButton>
            </Box>
          </div>
          <CandidateSidebarLeft />
        </Box>
        {props.children}
      </Drawer>
    </nav>
  );
}

export default SidebarLeft;
