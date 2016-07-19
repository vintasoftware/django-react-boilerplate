import React, { PropTypes } from 'react';

export default function HomePageReactTitle(props) {
  const { title } = props;

  return <h2>{title}</h2>;
}

HomePageReactTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
