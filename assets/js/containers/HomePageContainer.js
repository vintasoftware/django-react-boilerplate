import React from 'react';
import HomePageReactTitle from '../components/HomePageReactTitle';

/* You also get this warning in v1.x if you write your root component as
   stateless plain function instead of using React.Component. This problem
   is already solved completely in the upcoming v3.x.
   https://github.com/gaearon/react-hot-loader/blob/4978bffbb82a2508cf5d4ef2eee8b9b9101284ad/docs/Troubleshooting.md */
// eslint-disable-next-line react/prefer-stateless-function
export default class HomePageContainer extends React.Component {
  render() {
    const title = 'It really does work! (rendered by React, change this message to test hot reloading)';
    return <HomePageReactTitle title={title} />;
  }
}
