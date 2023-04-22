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
      dispatch({ type: GET_CATEGORIES, payload: data });
    });
};

export const addCategory =
  ({ token, formData }) =>
  (dispatch) => {
    fetch('http://localhost:4000/api/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify({ formData })
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to get categories');
        }
      })
      .then((data) => {
        dispatch({ type: ADD_CATEGORY, payload: data });
      });
  };
