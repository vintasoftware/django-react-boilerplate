import React from 'react';
import PropTypes from 'prop-types';


const ColorDisplay = (props) => {
  const { color } = props;

  const style = {
    color,
    fontWeight: 'bold',
    margin: '0px 5px 0px 5px',
  };

  return (
    <span style={style}>
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
