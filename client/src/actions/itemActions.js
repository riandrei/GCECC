import { ADD_ITEM } from './types';

export const addItem = (formData) => (dispatch) => {
  const token = sessionStorage.getItem('token');

  fetch('http://localhost:4000/api/items', {
    method: 'POST',
    headers: {
      enctype: 'multipart/form-data',
      'x-auth-token': token
    },
    credentials: 'include',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to add item');
      }
    })
    .then((data) => {
      dispatch({ type: ADD_ITEM, payload: data });
    });
};
