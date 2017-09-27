import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureUrlQuery } from 'react-url-query';

import './index.css';
import App from './App';
import history from './history.js';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

configureUrlQuery({ history });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
