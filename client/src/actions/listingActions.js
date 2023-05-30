import { ADD_LISTING, GET_LISTING } from './types';

export const addListing = (formData) => (dispatch) => {
  const token = sessionStorage.getItem('token');
  console.log(`test`);

  fetch('http://localhost:4000/api/listings', {
    method: 'POST',
    headers: {
      'x-auth-token': token
    },
    credentials: 'include',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to add listing');
      }
    })
    .then((data) => {
      dispatch({ type: ADD_LISTING, payload: data });
    });
};
