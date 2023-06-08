import React from 'react';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import configureStore from './store';
import SentryBoundary from './utils/SentryBoundary';

const store = configureStore({});
const App = () => (
  <SentryBoundary>
    <Provider store={store}>
      <Home />
    </Provider>
  </SentryBoundary>
);

export default App;
