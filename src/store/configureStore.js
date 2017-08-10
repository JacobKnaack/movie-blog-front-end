import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../dux';

const middleware = [
  thunk,
  apiMiddleware
];

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware), autoRehydrate())
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../dux/", () => {
      const nextRootReducer = require("../dux/").default;
      store.replaceReducer(nextRootReducer);
    });
  };

  return store;
}

export default configureStore;
