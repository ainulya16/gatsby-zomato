import {
  LOAD_NEARBY_RESTAURANTS,
  LOAD_NEARBY_RESTAURANTS_SUCCESS,
  LOAD_NEARBY_RESTAURANTS_ERROR,
  LOAD_RESTAURANT,
  LOAD_RESTAURANT_SUCCESS,
  LOAD_RESTAURANT_ERROR,
} from './constant';

export const restaurantsNearby = params => ({
  type: LOAD_NEARBY_RESTAURANTS,
  params,
});

export const restaurantsNearbySuccess = payload => ({
  type: LOAD_NEARBY_RESTAURANTS_SUCCESS,
  payload,
});

export const restaurantsNearbyFailed = error => ({
  type: LOAD_NEARBY_RESTAURANTS_ERROR,
  error,
});

export const restaurant = () => ({
  type: LOAD_RESTAURANT,
});

export const restaurantSuccess = payload => ({
  type: LOAD_RESTAURANT_SUCCESS,
  payload,
});

export const restaurantFailed = error => ({
  type: LOAD_RESTAURANT_ERROR,
  error,
});
