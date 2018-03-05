import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { configureUrlQuery } from 'react-url-query';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css';
import App from './App';
import history from './history.js';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

configureUrlQuery({ history });

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
