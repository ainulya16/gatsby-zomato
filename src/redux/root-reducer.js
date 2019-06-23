import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form/immutable';

import restaurant from './restaurant/reducer';

const rootReducer = {
  form,
  restaurant,
};

export default combineReducers(rootReducer);
