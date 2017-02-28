import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router , Route , IndexRoute, browserHistory } from 'react-router';

import './index.css';
import reducer from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(createLogger(),thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App}/>
        <Route path="addService" component={App}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
