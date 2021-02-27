import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'screens/globalSlice';

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
    <div>
      <Button onClick={handleLogin} variant="contained">
        Login
      </Button>
    </div>
  );
}

LoginScreen.propTypes = {};

export default LoginScreen;
