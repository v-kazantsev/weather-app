import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LocationReducer from './LocationReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
  form: formReducer,
  location: LocationReducer,
  async: asyncReducer
});

export default rootReducer;