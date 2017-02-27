import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import createLogger from 'redux-logger';
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(createLogger(),thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById('root')
);
