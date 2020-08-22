import InputActionTypes from './input.types';

const INITIAL_STATE = {
  keyword: '',
}

const inputReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case InputActionTypes.FIRE_SEARCH:
      return {
        ...state,
        keyword: action.payload,
      }
    default:
      return state;
  }
}

export default inputReducer;