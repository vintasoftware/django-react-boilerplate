import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import ColorChanger from '../app/example-app';

const title =
  'It really does work! (this section is rendered by React, ' +
  "change the app's name below to test hot reloading)";

const Home = () => {
  const ErrorComponent = null;
  const [showBugComponent, setShowBugComponent] = useState(false);

  return (
    <>
      <ColorChanger title={title} />
      <button type="button" onClick={() => setShowBugComponent(true)}>
        Click to test frontend Sentry error handling!
      </button>
      {showBugComponent && <ErrorComponent />}
    </>
  );
};

export default hot(module)(Home);
