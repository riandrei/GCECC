import { GET_LISTINGS, ADD_LISTING } from '../actions/types';

const initialState = {
  listings: []
};

export default function listingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return {
        ...state,
        listings: action.payload
      };

    case ADD_LISTING:
      return {
        ...state,
        listings: [action.payload, ...state.listings]
      };

    default:
      return state;
  }
}
