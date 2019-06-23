import { all } from 'redux-saga/effects';
import { getRestaurantDetailWatcher, getNearbyWatcher } from './restaurant/saga';

export default function* rootSaga() {
  yield all([
    getNearbyWatcher(),
    getRestaurantDetailWatcher(),
  ]);
}
