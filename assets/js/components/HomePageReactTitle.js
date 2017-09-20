import React from 'react';
import PropTypes from 'prop-types';

import { Urls } from 'utils';

const HomePageReactTitle = ({ title }) => {
  const homeURL = Urls['home']();

  return <h2>{title} (this is page {homeURL})</h2>;
};

HomePageReactTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePageReactTitle;
