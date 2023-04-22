import { GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from './types';

export const getCategories = (token) => (dispatch) => {
  fetch('http://localhost:4000/api/category', {
    method: 'GET',
    headers: {
      'x-auth-token': token
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to get categories');
      }
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_CATEGORIES, payload: data });
    });
};
