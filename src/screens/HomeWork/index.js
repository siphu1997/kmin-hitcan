import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';
import useCustomHistory from 'hooks/useCustomHistory';

function HomeScreen(props) {
  const { goTo } = useCustomHistory();
  return (
    <Box my={2}>
      <Box display="flex">
        <Box mx={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goTo('homework_detail', 1)}
          >
            1
          </Button>
        </Box>
        <Box mx={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goTo('homework_detail', 2)}
          >
            2
          </Button>
        </Box>
        <Box mx={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goTo('homework_detail', 3)}
          >
            3
          </Button>
        </Box>
        <Box mx={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goTo('homework_detail', 4)}
          >
            4
          </Button>
        </Box>
        <Box mx={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goTo('homework_detail', 5)}
          >
            5
          </Button>
        </Box>
        <Box mx={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goTo('homework_detail', 6)}
          >
            6
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
