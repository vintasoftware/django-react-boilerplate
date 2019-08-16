import React, { useState } from 'react';

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
        Click to test if Sentry is capturing frontend errors! (Should only work in Production)
      </button>
      {showBugComponent && <ErrorComponent />}
    </>
  );
};

export default Home;
