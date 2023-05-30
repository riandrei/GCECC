import { combineReducers } from 'redux';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import listingReducer from './listingReducer';

export default combineReducers({
  auth: authReducer,
  item: itemReducer,
  category: categoryReducer,
  cart: cartReducer,
  order: orderReducer,
  listing: listingReducer
});
