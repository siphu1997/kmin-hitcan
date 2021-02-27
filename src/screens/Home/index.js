import React from 'react';
import PropTypes from 'prop-types';
import useCustomHistory from 'hooks/useCustomHistory';
import { Box, Button } from '@material-ui/core';
import { localize } from 'localization';
function HomeScreen(props) {
  const { goTo } = useCustomHistory();
  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goTo('homework')}
      >
        {localize('homescreen.go_to_home_screen')}
      </Button>
      <Button variant="contained" color="primary" onClick={() => goTo('login')}>
        {localize('homescreen.goToLogin')}
      </Button>
    </Box>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
