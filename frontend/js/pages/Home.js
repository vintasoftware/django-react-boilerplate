import React, { useState } from 'react';

import ColorChanger from '../app/example-app';

const Home = () => {
  const [showBugComponent, setShowBugComponent] = useState(false);

  return (
    <>
      <ColorChanger />
      <button type="button" onClick={() => setShowBugComponent(true)}>
        Click to test if Sentry is capturing frontend errors! (Should only work in Production)
      </button>
      {showBugComponent && showBugComponent.field.notexist}
    </>
  );
};

export default Home;
