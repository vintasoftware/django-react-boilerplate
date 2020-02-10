import React, { useState } from 'react';

const Home = () => {
  const [showBugComponent, setShowBugComponent] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowBugComponent(true)}>
        Click to test if Sentry is capturing frontend errors! (Should only work in Production)
      </button>
      {showBugComponent && showBugComponent.field.notexist}
    </>
  );
};

export default Home;
