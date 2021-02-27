import React from 'react';
import PropTypes from 'prop-types';
import useCustomHistory from 'hooks/useCustomHistory';
import { Box, Button } from '@material-ui/core';
import { localize } from 'localization';
function HomeScreen(props) {
  const { goTo } = useCustomHistory();
  return (
    <Box mt={2}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goTo('homework')}
      >
        {localize('homescreen.goToHomeworkScreen')}
      </Button>
    </Box>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
