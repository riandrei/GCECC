import { LOGIN_SUCCESS, LOGOUT_SUCCESS, UNAUTHORIZED_ACCESS, SET_AUTHENTICATION, SET_ADMIN } from './types';

// dispatches an action and maybe a payload depending on server response
export const signIn = (credential) => (dispatch) => {
  // sends a POST request to the server to verify google JWT
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
  dispatch({ type: SET_AUTHENTICATION, payload: bool });
};

export const retrieveSessionStorage = () => (dispatch) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === `true`;
  const admin = sessionStorage.getItem('admin') === `true`;

  if (isAuthenticated) {
    console.log(`test`);
    dispatch({ type: SET_AUTHENTICATION, payload: true });
    if (admin) {
      console.log(`test 2`);

      dispatch({ type: SET_ADMIN, payload: true });
    }
  }
};
export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
