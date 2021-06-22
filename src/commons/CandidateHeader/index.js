import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { Route } from "react-router-dom";
import { Box } from "@material-ui/core";
// import DefaultNavbarContainer from '../../containers/DefaultNavbar';
// import PrimaryNavbar from '../PrimaryNavbar';
// import SecondaryNavbar from '../../containers/SecondaryNavbar';
// import { Route, Switch } from 'react-router-dom';
// import CreateFormHeader from '../../containers/CreateFormHeader';

const drawerWidth = 260;

const styles = (theme) => {
  return {
    hide: {
      display: "none"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    CustomNavbar: {
      boxShadow: "none",
      background: "white",
      borderBottom: "0.25px solid #e4e4e4",
      padding: "10px 0"
    },
    CustomInput: {
      background: "unset",
      "& input": {
        padding: "11px 14px",
        minWidth: "180px"
      },
      "& span": {
        color: "#1A1A1A !important"
      },
      "& input::placeholder": {
        color: "theme.color.text"
      }
    }
  };
};

class CandidateHeader extends Component {
  render() {
    const { classes, handleDrawerLeftOpen } = this.props;

    return (
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, classes.CustomNavbar, {
          [classes.appBarShift]: this.props.sideLeft
        })}
      >
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box display="flex">
              <IconButton
                color="inherit"
                aria-label="left drawer"
                onClick={handleDrawerLeftOpen}
                edge="start"
                className={clsx(
                  classes.menuButton,
                  this.props.sideLeft && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            {/* 
              {linkSidebarLeft &&
                linkSidebarLeft.map((item, index) => (
                  <Route
                    key={`$navbar_header_${index}`}
                    path={item.url}
                    render={() => {
                      return (
                        <HeaderLabel label={item.label} total={pageQuantity} />
                      );
                    }}
                  ></Route>
                ))}
              <Route
                key={`$navbar_header`}
                path={'/admin/employer-reports'}
                render={() => {
                  return <HeaderLabel label={'Báo cáo'} total={pageQuantity} />;
                }}
              ></Route>
            </Box> */}
            {/* HEADER FOREACH ROUTE */}
            {/* <Route
              path={linkSidebarLeft[4].url}
              render={() => {
                return <ReportTab />;
              }}
            ></Route>
            <Route
              path={'/admin/employer-reports'}
              render={() => {
                return <ReportTab />;
              }}
            ></Route>
            <Route
              path={linkSidebarLeft[0].url}
              render={() => {
                return <JobsHeader jobListActions={jobListActions} />;
              }}
            ></Route>
            <Route
              path={linkSidebarLeft[1].url}
              render={() => {
                return (
                  <CompanyHeader
                    companyListActions={companyListActions}
                    headerCompanyTimeFilter={headerCompanyTimeFilter}
                  />
                );
              }}
            ></Route>
            <Route
              path={linkSidebarLeft[2].url}
              render={() => {
                return (
                  <UserHeader
                    accountListAction={accountListAction}
                    headerAccountTimeFilter={headerAccountTimeFilter}
                  />
                );
              }}
            />
            <Route
              path={linkSidebarLeft[4].url}
              render={() => {
                return (
                  <ReportHeader
                    reportListActions={reportListActions}
                    headerReportTimeFilter={headerReportTimeFilter}
                  />
                );
              }}
            />
            <Route
              path={'/admin/employer-reports'}
              render={() => {
                return (
                  <ReportHeader
                    reportListActions={reportListActions}
                    headerReportTimeFilter={headerReportTimeFilter}
                  />
                );
              }}
            /> */}
            Đây là header chưa custom
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(CandidateHeader);
