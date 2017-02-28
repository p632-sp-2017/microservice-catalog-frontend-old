import {combineReducers} from 'redux';
import getDataOnLoad from './getDataOnLoad';
import microServiceFormReducer from './AddMicroServiceFormReducer';

const appReducer = combineReducers({
  getDataOnLoad,
  microServiceFormReducer
})

export default appReducer;
