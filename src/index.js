import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';

export const jacobId = process.env.REACT_APP_JACOB_ID;
export const ivanId = process.env.REACT_APP_IVAN_ID;
export const meganId = process.env.REACT_APP_MEGAN_ID;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
