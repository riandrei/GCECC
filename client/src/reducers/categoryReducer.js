import { GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../actions/types';

const initialState = {
  categories: []
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      };

    case UPDATE_CATEGORY:
      const { id, data } = action.payload;
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category._id === id) {
            category = data;
          }
        })
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((category) => category._id !== action.payload)
      };

    default:
      return state;
  }
}
