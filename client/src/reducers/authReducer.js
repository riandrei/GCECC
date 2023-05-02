import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UNAUTHORIZED_ACCESS,
  SET_AUTHENTICATION,
  SET_ADMIN,
  GET_USER
} from '../actions/types';

const initialState = {
  token: sessionStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: {
    id: sessionStorage.getItem('id')
  }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
          id: action.payload.id
        },
        isAuthenticated: action.payload.bool
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
    case GET_USER:
      sessionStorage.setItem('name', action.payload.name);
      sessionStorage.setItem('email', action.payload.email);
      sessionStorage.setItem('id', action.payload._id);
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    default:
      return state;
  }
}
