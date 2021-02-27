import React from 'react';
import PropTypes from 'prop-types';
import useCustomHistory from 'hooks/useCustomHistory';
import { Box, Button } from '@material-ui/core';

function HomeScreen(props) {
  const { goTo } = useCustomHistory();
  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goTo('homework')}
      >
        Go to homework screen
      </Button>
    </Box>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
