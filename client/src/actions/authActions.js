import { LOGIN_SUCCESS, UNAUTHORIZED_ACCESS } from './types';

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
