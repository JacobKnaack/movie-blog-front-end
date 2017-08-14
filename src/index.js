import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const jacobId = process.env.REACT_APP_JACOB_ID;
export const ivanId = process.env.REACT_APP_IVAN_ID;
export const meganId = process.env.REACT_APP_MEGAN_ID;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
