import { LOGIN_SUCCESS, UNAUTHORIZED_ACCESS, SET_AUTHENTICATION } from './types';

export const signIn = (credential) => (dispatch) => {
  fetch('http://localhost:4000/api/signIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ jwt: credential })
  })
    .then((response) => {
      if (response.statusText === 'Unauthorized') {
        dispatch({ type: UNAUTHORIZED_ACCESS });
      } else {
        return response.json();
      }
    })
    .then((data) => {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    })
    .catch((error) => {});
};

export const setAuthentication = (bool) => (dispatch) => {
  dispatch({ type: SET_AUTHENTICATION, payload: true });
};
