import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history))
)

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer,
  );
  return store;
};

export default configureStore;