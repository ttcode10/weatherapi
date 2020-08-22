import ResultActionTypes from './result.types';

const INITIAL_STATE = {
  results: [],
  selectedId: '',
};

const resultReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_CITY':
      return {
        ...state,
        selectedId: action.payload,
      }
    default:
      return state;
  }
};

export default resultReducer;