import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Component from '..';

const mockData = {
  id: '16774318',
  name: 'Otto Enoteca & Pizzeria',
  url: 'https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village',
  location: {
    address: '1 5th Avenue, New York, NY 10003',
    locality: 'Greenwich Village',
    city: 'New York City',
    latitude: '40.732013',
    longitude: '-73.996155',
    zipcode: '10003',
    country_id: '216',
  },
  average_cost_for_two: '60',
  price_range: '2',
  currency: '$',
  thumb: 'https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png',
  featured_image: 'https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png',
  photos_url: 'https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop',
  menu_url: 'https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop',
  events_url: 'https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop',
  user_rating: {
    aggregate_rating: '3.7',
    rating_text: 'Very Good',
    rating_color: '5BA829',
    votes: '1046',
  },
  has_online_delivery: '0',
  is_delivering_now: '0',
  has_table_booking: '0',
  deeplink: 'zomato://r/16774318',
  cuisines: 'Cafe',
  all_reviews_count: '15',
  photo_count: '18',
  phone_numbers: '(212) 228-2930',
  photos: [
    {
      id: 'u_MjA5MjY1OTk5OT',
      url: 'https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG',
      thumb_url: 'https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG',
      user: {
        name: 'John Doe',
        zomato_handle: 'John',
        foodie_level: 'Super Foodie',
        foodie_level_num: '9',
        foodie_color: 'f58552',
        profile_url: 'https://www.zomato.com/john',
        profile_deeplink: 'zoma.to/u/1170245',
        profile_image: 'string',
      },
      res_id: '16782899',
      caption: '#awesome',
      timestamp: '1435111770',
      friendly_time: '3 months ago',
      width: '640',
      height: '640',
      comments_count: '0',
      likes_count: '0',
    },
  ],
  all_reviews: [
    {
      rating: '5',
      review_text: "The best latte I've ever had. It tasted a little sweet",
      id: '24127336',
      rating_color: '305D02',
      review_time_friendly: '2 months ago',
      rating_text: 'Insane!',
      timestamp: '1435507367',
      likes: '0',
      user: {
        name: 'John Doe',
        zomato_handle: 'John',
        foodie_level: 'Super Foodie',
        foodie_level_num: '9',
        foodie_color: 'f58552',
        profile_url: 'https://www.zomato.com/john',
        profile_deeplink: 'zoma.to/u/1170245',
        profile_image: 'string',
      },
      comments_count: '0',
    },
  ],
};
describe('Component: Detail', () => {
  it('should be exist', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders Loading', () => {
    const tree = renderer.create(<Component loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders image and text', () => {
    const tree = renderer.create(<Component loading={false} data={mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});