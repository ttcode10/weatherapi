import InputActionTypes from './input.types';

export const searchCity = keyword => ({
  type: InputActionTypes.FIRE_SEARCH,
  payload: keyword,
});