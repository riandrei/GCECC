import { LOGIN_SUCCESS, LOGOUT_SUCCESS, UNAUTHORIZED_ACCESS, SET_AUTHENTICATION, SET_ADMIN } from '../actions/types';

const initialState = {
  token: sessionStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case SET_ADMIN:
      return {
        ...state,
        user: {
          ...state.user,
          admin: action.payload
        }
      };
    case LOGIN_SUCCESS:
      sessionStorage.setItem('token', action.payload.token);
      sessionStorage.setItem('email', action.payload.user.googleId);
      sessionStorage.setItem('admin', action.payload.user.admin);
      sessionStorage.setItem('isAuthenticated', true);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case LOGOUT_SUCCESS:
      sessionStorage.clear();
      return {
        ...state,
        isAuthenticated: false
      };
    case UNAUTHORIZED_ACCESS:
      alert(`Please use your GC domain.`);
      return state;
    default:
      return state;
  }
}
