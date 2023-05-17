import { PLACE_ORDER } from './types';

export const placeOrder =
  ({ token, itemDetails, userDetails }) =>
  (dispatch) => {
    fetch('http://localhost:4000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      credentials: 'include',
      body: JSON.stringify({ itemDetails, userDetails })
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to place order');
        }
      })
      .then((data) => {
        dispatch({ type: PLACE_ORDER, payload: data });
      });
  };
