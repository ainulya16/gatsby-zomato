import axios from 'axios';

const api = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/',
  headers: {
    'user-key': '5e95d9562a871654fa92b88761f75c8c',
  },
});

export const getNearby = (location) => {
  return api.get();
};

export const getCategories = () => api.get('categories');

export const getRestaurantDetail = (id) => {
  return api.get();
};