import { takeLatest, put, call } from 'redux-saga/effects';
import {
  LOAD_NEARBY_RESTAURANTS,
  LOAD_RESTAURANT,
} from './constant';
import {
  restaurantSuccess,
  restaurantFailed,
  restaurantsNearbySuccess,
  restaurantsNearbyFailed,
} from './action';
import {
  nearby,
  restaurant,
} from '../../services/zomato';


export function* getNearby({ params }) {
  try {
    const payload = yield call(nearby, params);
    yield put(restaurantsNearbySuccess(payload));
  } catch (error) {
    yield put(restaurantsNearbyFailed(error));
  }
}

export function* getNearbyWatcher() {
  yield takeLatest(LOAD_NEARBY_RESTAURANTS, getNearby);
}

export function* getRestaurantDetail() {
  try {
    const payload = yield call(restaurant);
    yield put(restaurantSuccess(payload));
  } catch (error) {
    yield put(restaurantFailed(error));
  }
}

export function* getRestaurantDetailWatcher() {
  yield takeLatest(LOAD_RESTAURANT, getRestaurantDetail);
}
