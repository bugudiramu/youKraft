import { combineReducers } from 'redux';
import NoodleReducer from './NoodleReducer';

const RootReducer = combineReducers({
  noodle: NoodleReducer,
});

export default RootReducer;
