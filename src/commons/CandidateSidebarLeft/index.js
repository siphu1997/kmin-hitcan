import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import { Help } from "@material-ui/icons";
import {
  Box,
  Typography,
  Grow,
  MenuList,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import ArrowDropDownIcon from "../../assets/svg/ArrowDropDownIcon";
import { linkSidebarLeft } from "configs/configureRoute";
import CommonButton from "commons/CommonButton";

const useStyle = makeStyles((theme) => ({
  BSidebarLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    height: "calc(100vh - 130px)",
    color: theme.color.text,
    zIndex: "1200",
    marginTop: "30px",
    "& a": {
      color: "#666",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: 13,
      fontFamily: "Montserrat"
    },
    "& a:hover": {
      textDecoration: "none"
    },
    "& ul": {
      listStyle: "none",
      padding: theme.spacing(0, 0),
      "& a": {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2, 2),
        width: "100%",
        "& svg": {
          margin: theme.spacing(0, 2),
          fill: "#987DAF"
        }
      },
      "& a.active": {
        background: theme.color.secondary.lighter,
        color: theme.color.secondary.main,
        "&::after": {
          width: 5,
          height: 28,
          content: '" "!important',
          background: theme.color.secondary.main,
          position: "absolute",
          right: 0
        },
        "& svg": {
          margin: theme.spacing(0, 2),
          fill: theme.color.secondary.main
        }
      }
    }
  },
  addBtn: {
    margin: "0 20px",
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    textTransform: "inherit",
    color: "white !important",
    paddingTop: 10,
    paddingBottom: 10,
    "& svg": {
      margin: theme.spacing(0, 1)
    }
  },
  arrowBtn: {
    minWidth: "28px",
    height: "28px",
    borderRadius: "50%"
  },
  [theme.breakpoints.down("md")]: {
    footerSBLeft: {
      position: "inherit !important"
    }
  },
  footerSBLeft: {
    padding: theme.spacing(0, 3),
    background: "white"
  },
  spc: {
    whiteSpace: "nowrap",
    overflow: " hidden",
    textOverflow: "ellipsis",
    maxWidth: "140px",
    margin: theme.spacing(0, 2)
  },
  userGroup: {
    boxShadow: theme.boxShadow,
    borderRadius: "4px",
    position: "relative"
  },
  dialogGroup: {
    position: "absolute",
    background: "white",
    marginTop: "-60px",
    left: 0,
    right: 0
  },
  menuItem: {
    padding: 0
  },
  btnFindJob: {
    padding: "25px",
    display: "inline-block",
    width: "100%"
  },
  btnLogOut: {
    fontWeight: "700",
    color: theme.color.primary.light
  }
}));
function CandidateSidebarLeft(props) {
  const classes = useStyle();
  const [isShow, setShow] = useState(false);
  const handleShow = () => setShow(!isShow);

  return (
    <div className={classes.BSidebarLeft}>
      <div>
        <MenuList>
          {linkSidebarLeft &&
            linkSidebarLeft.map((item, index) => (
              <MenuItem
                key={`$sidebar_left_link_${index}`}
                className={classes.menuItem}
                hover="false"
              >
                <NavLink to={item.path}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <Typography variant="button2">{item.label}</Typography>
                </NavLink>
              </MenuItem>
            ))}
        </MenuList>
        <NavLink to="/" className={classes.btnFindJob}>
          <CommonButton width="100%">Tìm việc</CommonButton>
        </NavLink>
      </div>
      <div className={classes.footerSBLeft}>
        <Box style={{ position: "relative" }}>
          <Grow in={isShow}>
            <Box elevation={4}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={3}
                className={`${classes.dialogGroup} ${classes.userGroup}`}
              >
                {/* <DialogsGroup
                  isDeleting={props.isDeleting}
                  isUpdating={props.isUpdating}
                  businessPageActions={props.businessPageActions}
                  managers={props.managers}
                  user={props.user}
                  handleShow={handleShow}
                  invite={props.invite}
                  isLoading={props.isLoading}
                /> */}
              </Box>
            </Box>
          </Grow>
        </Box>
        <Box display="flex" alignItems="center" my={3}>
          <Help style={{ color: "#D0C9D6" }} />
          <Typography className={classes.spc}>
            <Link to="/">
              <Typography style={{ fontWeight: 500 }} variant="button2">
                Hỗ trợ
              </Typography>
            </Link>
          </Typography>
        </Box>
        <Box p={1} my={3}>
          <Link to="/">
            <Typography className={classes.btnLogOut} variant="subtitle1">
              Đăng xuất
            </Typography>
          </Link>
        </Box>
      </div>
    </div>
  );
}
export default CandidateSidebarLeft;
