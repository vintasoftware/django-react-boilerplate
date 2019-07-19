import React from 'react';
import ColorChanger from '../app/example-app';


const title = 'It really does work! (this section is rendered by React, '
              + "change the app's name below to test hot reloading)";

const Home = () => (
  <ColorChanger title={title} />
);

export default Home;
