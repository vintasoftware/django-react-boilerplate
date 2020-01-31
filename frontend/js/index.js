// import pages
import React from 'react';
import * as Sentry from '@sentry/browser';

import ReactDOM from 'react-dom';

import './bootstrap-includes';
import '../sass/style.scss';

import App from './App';

Sentry.init({
  dsn: window.SENTRY_DSN,
  release: window.COMMIT_SHA,
});

ReactDOM.render(<App />, document.getElementById('react-app'));
