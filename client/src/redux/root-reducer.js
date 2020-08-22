import { combineReducers } from 'redux';

import inputReducer from './input/input.reducer';
import weatherReducer from './weather/weather.reducer';
import resultReducer from './result/result.reducer';

const rootReducer = combineReducers({
  input: inputReducer,
  result: resultReducer,
  weather: weatherReducer,
});

export default rootReducer;