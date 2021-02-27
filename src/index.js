import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'configs/configureTheme';
import store from 'configs/store';
import { Provider as ReduxProvide } from 'react-redux';

ReactDOM.render(
  <Router>
    <ReduxProvide store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ReduxProvide>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
