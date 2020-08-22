import ResultActionTypes from './result.types';

export const selectResult = (id) => ({
  type: ResultActionTypes.SELECT_CITY,
  payload: id
});
