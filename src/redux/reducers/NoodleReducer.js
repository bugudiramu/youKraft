import * as Action from '../actionTypes';

const initialState = {
  countries: [],
  uniqueCountries: [],
  current: [],
  images: [],
};
const NoodleReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        uniqueCountries: [...new Set(action.payload.map((e) => e.Country))],
        current: state.uniqueCountries.slice(0, 10),
      };

    case Action.CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case Action.GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default NoodleReducer;
