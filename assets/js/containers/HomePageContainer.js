import React from 'react';
import HomePageReactTitle from '../components/HomePageReactTitle';


export default class HomePageContainer extends React.Component {
  render() {
    return <HomePageReactTitle title="It really does work! (rendered by React, change this message to test hot reloading)" />;
  }
}
