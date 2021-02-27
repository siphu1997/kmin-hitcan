import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const primary = '#032CA6';
const secondary = '#F25CA2';

const warning = '#E35847';
const success = '#2DCF58';
const info = '#5bc0de';
const error = '#dc3545';

const theme = {
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    warning: {
      main: warning,
    },
    success: {
      main: success,
    },
    info: {
      main: info,
    },
    error: {
      main: error,
    },
    background: {
      default: '#040b1f',
    },
  },
  shape: {
    borderRadius: 5,
  },
};

export default responsiveFontSizes(createMuiTheme(theme));
