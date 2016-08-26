import React, { PropTypes } from 'react';

export default class HomePageReactTitle extends React.Component {
  render() {
    const { title } = this.props;
    var homeURL = Django.url('home');

    return <h2>{title} (this is page {homeURL})</h2>;
  }
}

HomePageReactTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
