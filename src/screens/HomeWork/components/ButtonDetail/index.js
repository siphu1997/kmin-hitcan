import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import useCustomHistory from 'hooks/useCustomHistory';

function ButtonDetail({ label, id }) {
  const { goTo } = useCustomHistory();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => goTo('homework_detail', id)}
    >
      {label}
    </Button>
  );
}

ButtonDetail.propTypes = {};

export default ButtonDetail;
