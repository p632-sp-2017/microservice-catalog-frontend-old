import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import logger from 'redux-logger';
import appReducer from './reducers';

let middleware = applyMiddleware(logger(),thunk);
let store = createStore(appReducer, middleware);

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById('root')
);
