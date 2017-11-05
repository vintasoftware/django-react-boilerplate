import React from 'react';
import PropTypes from 'prop-types';

import ColorDisplay from '../ColorDisplay';

import './style.scss';


class ColorChanger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'black',
    };

    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(e) {
    const color = e.target.value;
    this.setState({ color });
  }

  render() {
    const { title } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <p>
          Check this example app: change the color to see it reflected in the text next to it.
        </p>

        <div className="container">
          <select className="color-picker" onChange={this.handleChangeColor}>
            <option value="black">Black</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>

          <ColorDisplay color={this.state.color} />
        </div>
      </div>
    );
  }
}

ColorChanger.defaultProps = {
  title: 'React App Loaded!',
};

ColorChanger.propTypes = {
  title: PropTypes.string,
};

export default ColorChanger;
