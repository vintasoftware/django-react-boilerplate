import * as Sentry from '@sentry/react';
import { parse as cookieParse } from 'cookie';
import { RouterProvider } from 'react-router/dom';

import { client } from '@/js/api/client.gen';
import router from '@/js/routes';

client.instance.interceptors.request.use((request) => {
  const { csrftoken } = cookieParse(document.cookie);
  if (request.headers && csrftoken) {
    request.headers['X-CSRFTOKEN'] = csrftoken;
  }
  return request;
});

const App = () => (
  <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
    <RouterProvider router={router} />
  </Sentry.ErrorBoundary>
);

export default App;
