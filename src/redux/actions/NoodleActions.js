import axios from 'axios';
import * as Action from '../actionTypes';

const BRAND_URL =
  'https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json';
const RANDOM_IMAGE_URL =
  'https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json';

export const getCountries = () => {
  try {
    return async (dispatch) => {
      const response = await axios({
        url: BRAND_URL,
        method: 'GET',
      });
      dispatch({
        type: Action.GET_COUNTRIES,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const getImages = () => {
  try {
    return async (dispatch) => {
      const response = await axios({
        url: RANDOM_IMAGE_URL,
        method: 'GET',
      });
      dispatch({
        type: Action.GET_IMAGES,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const setCurrent = (data) => (dispatch) => {
  dispatch({
    type: Action.CURRENT,
    payload: data,
  });
};
