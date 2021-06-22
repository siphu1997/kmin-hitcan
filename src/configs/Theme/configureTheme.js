import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
let theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      '"Montserrat"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    h1: {
      fontSize: "40px",
      fontWeight: 900,
      fontFamily: '"Helvetica Neue Bold"'
    },
    h2: {
      fontSize: "28px",
      fontWeight: 900,
      fontFamily: '"Helvetica Neue Bold"'
    },
    h3: {
      fontSize: "17px",
      fontWeight: 600,
      fontFamily: '"Helvetica Neue Bold"'
    },
    h4: {
      fontSize: "15px",
      fontWeight: 400
    },
    h5: {
      fontSize: "12px",
      fontWeight: 600,
      fontFamily: '"Helvetica Neue Bold"'
    },
    button: {
      fontSize: "17px",
      fontFamily: '"Montserrat"',
      fontWeight: 600
    },
    button2: {
      fontSize: "13px",
      fontFamily: '"Montserrat"',
      lineHeight: "18px",
      fontWeight: 600
    },
    caption: {
      fontSize: "12px",
      fontFamily: '"Montserrat"'
    },
    subtitle1: {
      fontSize: "11px",
      fontFamily: '"Montserrat"'
    },
    subtitle2: {
      fontSize: "13px",
      fontFamily: '"Montserrat"'
    },
    body1: {
      fontSize: "15px",
      fontFamily: '"Montserrat"'
    },
    body2: {
      fontSize: "18px",
      fontFamily: '"Montserrat"'
    },
    overline: {
      fontSize: "20px",
      fontFamily: '"Helvetica Neue Bold"',
      textTransform: "uppercase",
      fontWeight: "bold",
      lineHeight: "1.2"
    }
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: "white"
      }
    }
  },
  color: {
    primary: {
      main: "#542679",
      light: "#987DAF",
      lighter: "#E6DAF0",
      dark: "#3F3356",
      semigrey: "#d0c9d6",
      grey: "#F7F5F9"
    },
    secondary: {
      main: "#EEBA00",
      light: "#F5D666",
      lighter: "#FBEEBF",
      contrastText: "#ffffff"
    },
    text: "#666666",
    alert: "#FD2446"
  },
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.07)",
  boxShadow2: "0px 0px 10px rgba(0,0,0,0.16)",
  sidebarRightWidth: 60,
  borderRadius: "6px",
  palette: {
    primary: {
      main: "#542679",
      light: "#987DAF",
      lighter: "#E6DAF0"
    },
    secondary: {
      main: "#EEBA00",
      light: "#F5D666",
      lighter: "#FBEEBF"
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
