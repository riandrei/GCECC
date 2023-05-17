import { GET_CART } from './types';

export const getCart =
  ({ token, userId }) =>
  (dispatch) => {
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

export const updateCartQuantity =
  ({ token, userId, updatedCartItem }) =>
  (dispatch) => {
    fetch(`http://localhost:4000/api/cart/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(updatedCartItem)
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

export const deleteCartItems =
  ({ token, userId, checkedItems, itemDetails }) =>
  (dispatch) => {
    if (!checkedItems) {
      checkedItems = itemDetails;
    }
    console.log(itemDetails);
    fetch(`http://localhost:4000/api/cart/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(checkedItems)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to delete cart item');
        }
      })
      .then((data) => {
        dispatch({ type: GET_CART, payload: data });
      });
  };
