import { createSelector } from 'reselect';

const selectRestaurant = state => state.restaurant;

export const Restaurants = () => createSelector(
    selectRestaurant,
    stateRestaurant => stateRestaurant.get('data'),
);
export const Restaurant = () => createSelector(
    selectRestaurant,
    stateRestaurant => stateRestaurant.get('detail'),
);
export const Loading = () => createSelector(
    selectRestaurant,
    stateRestaurant => stateRestaurant.get('loading'),
);
export const LoadingDetail = () => createSelector(
    selectRestaurant,
    stateRestaurant => stateRestaurant.get('loading_detail'),
);
export const ErrorMessage = () => createSelector(
    selectRestaurant,
    stateRestaurant => stateRestaurant.get('error'),
);
