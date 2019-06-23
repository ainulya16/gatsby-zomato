import axios from 'axios';

const api = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/',
  headers: {
    'user-key': '5e95d9562a871654fa92b88761f75c8c',
  },
});

export const nearby = async ({ lat, lon }) => {
  const params = {
    lat,
    lon,
  };
  try {
    const payload = await api.get('geocode', { params });
    return payload.data.nearby_restaurants;
  } catch (error) {
    return error;
  }
};

export const categories = () => api.get('categories');

export const restaurant = (id) => {
  const params = { res_id: id };

  return api.get('restaurant', { params });
};