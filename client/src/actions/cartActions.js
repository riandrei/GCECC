import { GET_CART } from './types';

export const getCart =
  ({ token, userId }) =>
  (dispatch) => {
    console.log(userId);
    fetch(`http://localhost:4000/api/cart/${userId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to get cart');
        }
      })
      .then((data) => {
        dispatch({ type: GET_CART, payload: data });
      });
  };
