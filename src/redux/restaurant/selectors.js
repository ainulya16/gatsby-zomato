import { createSelector } from 'reselect';

const selectRestaurant = state => state.restaurant;

export const Restaurants = () => createSelector(
    selectRestaurant,
    state => state.get('restaurants'),
);
export const Restaurant = () => createSelector(
    selectRestaurant,
    state => state.get('restaurants'),
);
export const Loading = () => createSelector(
    selectRestaurant,
    state => state.get('loading'),
);
