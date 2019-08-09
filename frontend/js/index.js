// import pages
import 'bootstrap-includes';
import '../sass/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';

// TODO insert sentry dsn
Sentry.init({ dsn: '' });

ReactDOM.render(<App />, document.getElementById('react-app'));
