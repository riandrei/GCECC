import { GET_CART } from '../actions/types';

const initialState = {
  userId: null,
  items: null,
  bill: null
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        userId: action.payload.userId,
        items: action.payload.items,
        bill: action.payload.bill
      };
    default:
      return state;
  }
}
