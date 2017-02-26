import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import createLogger from 'redux-logger';
import appReducer from './reducers';

const logger = createLogger();
let middleware = applyMiddleware(thunk, logger());
let store = createStore(appReducer, middleware);

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById('root')
);
