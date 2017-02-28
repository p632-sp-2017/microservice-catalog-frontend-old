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
import AddMicroService from './AddMicroServiceForm'
import AccordionView from './containers/AccordionView';
import DataView from './DataView';

const createStoreWithMiddleware = applyMiddleware(createLogger(),thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DataView}></IndexRoute>
          <Route path="addService" component={AddMicroService}></Route>
          <Route path="accordionView" component={AccordionView}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
