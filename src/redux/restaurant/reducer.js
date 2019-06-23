import { fromJS } from 'immutable';
import {
  LOAD_NEARBY_RESTAURANTS,
  LOAD_NEARBY_RESTAURANTS_SUCCESS,
  LOAD_NEARBY_RESTAURANTS_ERROR,
  LOAD_RESTAURANT,
  LOAD_RESTAURANT_SUCCESS,
  LOAD_RESTAURANT_ERROR,
} from './constant';

const initialState = fromJS({
  loading: false,
  error: false,
  data: [],
  detail: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEARBY_RESTAURANTS:
      return state.set('loading', true);
    case LOAD_NEARBY_RESTAURANTS_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.payload));
    case LOAD_NEARBY_RESTAURANTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    case LOAD_RESTAURANT:
      return state.set('loading', true);
    case LOAD_RESTAURANT_SUCCESS:
      return state.set('loading', false).set('detail', fromJS(action.payload));
    case LOAD_RESTAURANT_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
};
