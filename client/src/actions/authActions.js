import { LOGIN_SUCCESS, LOGOUT_SUCCESS, UNAUTHORIZED_ACCESS, SET_AUTHENTICATION, SET_ADMIN, GET_USER } from './types';
import jwtDecode from 'jwt-decode';

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
      const decodedToken = jwtDecode(data.token);

      return {
        user: decodedToken,
        token: data.token
      };
    })
    .then((data) => {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      dispatch(getUser(data.token));
    })
    .catch((error) => {});
};

export const setAuthentication = (bool) => (dispatch) => {
  dispatch({ type: SET_AUTHENTICATION, payload: bool });
};

export const getUser = (token) => (dispatch) => {
  fetch('http://localhost:4000/api/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    },
    credentials: 'include'
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: GET_USER, payload: data });
    });
};

export const retrieveSessionStorage = () => (dispatch) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === `true`;
  const admin = sessionStorage.getItem('admin') === `true`;
  const name = sessionStorage.getItem('name');
  const email = sessionStorage.getItem('email');
  const id = sessionStorage.getItem('id');

  if (isAuthenticated) {
    dispatch({ type: SET_AUTHENTICATION, payload: { bool: true, name, email, id } });

    if (admin) {
      dispatch({ type: SET_ADMIN, payload: true });
    }
  }
};
export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
