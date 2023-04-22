import { combineReducers } from 'redux';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  auth: authReducer,
  item: itemReducer,
  category: categoryReducer
});
