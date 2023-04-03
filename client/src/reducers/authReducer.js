import { LOGIN_SUCCESS, UNAUTHORIZED_ACCESS, SET_AUTHENTICATION } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      sessionStorage.setItem('isAuthenticated', true);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case UNAUTHORIZED_ACCESS:
      alert(`Please use your GC domain.`);
      return state;
    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
