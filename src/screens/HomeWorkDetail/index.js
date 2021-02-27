import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function HomeWorkDetail(props) {
  const { id } = useParams();

  return <div>HomeWorkDetail : {id}</div>;
}

HomeWorkDetail.propTypes = {};

export default HomeWorkDetail;
