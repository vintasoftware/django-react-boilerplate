import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';


const ColorDisplay = (props) => {
  const { color } = props;

  return (
    <span className={`color-${color}`}>
      {color}
    </span>
  );
};

ColorDisplay.defaultProps = {
  color: 'black',
};

ColorDisplay.propTypes = {
  color: PropTypes.string,
};

export default ColorDisplay;
