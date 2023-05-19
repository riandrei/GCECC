import { PLACE_ORDER, GET_ORDER } from './types';

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

export const getUserOrders =
  ({ token, userId }) =>
  (dispatch) => {
    fetch(`http://localhost:4000/api/orders/${userId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to get order');
        }
      })
      .then((data) => {
        dispatch({ type: GET_ORDER, payload: data });
      });
  };

export const getOrders =
  ({ token }) =>
  (dispatch) => {
    fetch(`http://localhost:4000/api/orders/`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to get orders');
        }
      })
      .then((data) => {
        dispatch({ type: GET_ORDER, payload: data });
      });
  };

export const changeOrderStatus =
  ({ token, modifiedOrder }) =>
  (dispatch) => {
    fetch(`http://localhost:4000/api/orders`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(modifiedOrder)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to edit order');
        }
      })
      .then((data) => {
        dispatch({ type: GET_ORDER, payload: data });
      });
  };
