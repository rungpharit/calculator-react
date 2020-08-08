import { combineReducers } from 'redux';

import numberReducer from './number/reducers';
import operatorReducer from './operator/reducers';

const rootReducer = combineReducers({
  number : numberReducer,
  operator : operatorReducer
})

export default rootReducer;