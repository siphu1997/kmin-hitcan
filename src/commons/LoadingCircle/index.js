import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./style.css";

function LoadingCircle({ classNames, isFullScreen }) {
  return (
    <div
      className={cn({
        ctnLoading: true,
        isFullScreen: !!isFullScreen,
        [classNames]: !!classNames
      })}
    >
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

LoadingCircle.defaultProps = {
  isFullScreen: false,
  classNames: ""
};

LoadingCircle.propTypes = {
  isFullScreen: PropTypes.bool,
  classNames: PropTypes.string
};

export default LoadingCircle;
