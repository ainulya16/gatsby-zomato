import { takeLatest, put, call } from 'redux-saga/effects';
import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANT,
} from './constant';
import {
  restaurantSuccess,
  restaurantFailed,
} from './action';


export function* getNearby() {
  try {
    const payload = yield call(restaurantNearby);
    yield put(restaurantSuccess(payload));
  } catch (error) {
    yield put(restaurantFailed());
  }
}

export function* getNearbyWatcher() {
  yield takeLatest(LOAD_RESTAURANTS, getNearby);
}

export function* getRestaurantDetail() {
  try {
    const payload = yield call(restaurantDetail);
    yield put(restaurantSuccess(payload));
  } catch (error) {
    yield put(restaurantFailed());
  }
}

export function* getRestaurantDetailWatcher() {
  yield takeLatest(LOAD_RESTAURANT, getRestaurantDetail);
}
