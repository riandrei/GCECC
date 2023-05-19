import { PLACE_ORDER, GET_ORDER } from '../actions/types';

const initialState = {
  orders: []
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    case GET_ORDER:
      return {
        ...state,
        orders: action.payload
      };

    default:
      return state;
  }
}
