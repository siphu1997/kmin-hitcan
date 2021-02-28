import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'screens/globalSlice';
import { localize } from 'localization';
function LoginScreen(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(process.env);
  }, []);

  const handleLogin = () => {
    const data = {
      name: 'HSP',
      role: 'admin',
    };
    dispatch(setUserInfo(data));
    window.localStorage.setItem('isLogin', true);
  };

  return (
    <Grid container justify="center" alignItems="flex-end">
      <Grid item xs={6}>
        <Box mt={10} p={5} textAlign="center" minHeight="400px">
          <Button
            onClick={handleLogin}
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
          >
            <Box my={2}>{localize('loginScreen.login')}</Box>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

LoginScreen.propTypes = {};

export default LoginScreen;
