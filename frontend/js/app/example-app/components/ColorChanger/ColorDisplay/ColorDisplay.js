import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const ColorDisplay = (props) => {
  const { color } = props;

  return (
    <span className={`color-${color}`} data-testid="color-display">
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
