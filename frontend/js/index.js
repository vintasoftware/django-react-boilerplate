// import pages
import * as Sentry from '@sentry/browser';
import React from 'react';
import { createRoot } from 'react-dom/client';

import '../sass/style.scss';

import App from './App';

Sentry.init({
  dsn: window.SENTRY_DSN,
  release: window.COMMIT_SHA,
});

const root = createRoot(document.getElementById('react-app'));
root.render(<App />);
