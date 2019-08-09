import React from 'react';
import Home from './pages/Home';
import SentryBoundary from './utils/SentryBoundary';

const App = () => (
  <SentryBoundary>
    <Home />
  </SentryBoundary>
);

export default App;
