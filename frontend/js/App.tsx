import * as Sentry from "@sentry/react";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import configureStore from "./store";

const store = configureStore({});
const App = () => (
  <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
    <Provider store={store}>
      <Home />
    </Provider>
  </Sentry.ErrorBoundary>
);

export default App;
