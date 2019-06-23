import {
  LOAD_RESTAURANT,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_ERROR,
  LOAD_RESTAURANT,
  LOAD_RESTAURANT_SUCCESS,
  LOAD_RESTAURANT_ERROR
} from './constant';

export const restaurants = () => ({
  type: LOAD_RESTAURANTS,
});

export const restaurantsSuccess = payload => ({
  type: LOAD_RESTAURANTS_SUCCESS,
  payload,
});

export const restaurantsFailed = error => ({
  type: LOAD_RESTAURANTS_ERROR,
  error
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
  error
});

