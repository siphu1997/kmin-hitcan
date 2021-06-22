import { Button, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  button: {
    padding: "13px"
  }
}));
function CommonButton(props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      style={{ width: `${props.width}` }}
    >
      {props.children}
    </Button>
  );
}

export default CommonButton;
