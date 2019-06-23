import axios from 'axios';

const api = axios.create({
  baseURL:'',
})

export const getNearby = (location) => {
  return api.get();
}

export const getRestaurantDetail = id => {
  return api.get();
}