import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { localize } from 'localization';

function HomeWorkDetail(props) {
  const { id } = useParams();

  return <div>{localize('homeworkScreen.decription', { id })}</div>;
}

HomeWorkDetail.propTypes = {};

export default HomeWorkDetail;
