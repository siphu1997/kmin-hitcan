import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { localize } from 'localization';
import { Box, Typography } from '@material-ui/core';

function HomeWorkDetail(props) {
  const { id } = useParams();

  return (
    <Box mt={2}>
      <Typography variant="h4" color="secondary">
        {localize('homeworkScreen.decription', { id })}
      </Typography>
    </Box>
  );
}

HomeWorkDetail.propTypes = {};

export default HomeWorkDetail;
