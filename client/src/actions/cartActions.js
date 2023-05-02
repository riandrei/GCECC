import { GET_CART, ADD_CART_ITEM } from './types';

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

export const addCartItem =
  ({ token, userId, cartItem }) =>
  (dispatch) => {
    fetch(`http://localhost:4000/api/cart/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(cartItem)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to add cartItem');
        }
      })
      .then((data) => {
        dispatch({ type: GET_CART, payload: data });
      });
  };
