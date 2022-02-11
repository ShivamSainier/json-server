import {
  USER_LOGIN_SUCCESS,
  GET_USER,
  AUTHENTICATION_FAILED,
  REFRESHING_TOKEN,
  REFRESHED_TOKEN,
} from "../constants/auth";
import {toast} from 'react-toastify'

const initialState = {
  refreshingToken: false,
  access_token: null,
  refresh_token: null,
  isAuthenticated: false,
  user: null,
  userRole: null,
  workExperiences: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case REFRESHING_TOKEN:
      return { ...state, refreshingToken: true }

    case REFRESHED_TOKEN:
      return { ...state, refreshingToken: false }

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.data.access_token,
        refresh_token: action.data.refresh_token,
        isAuthenticated: true
      }

    case GET_USER:
      return {
        ...state,
        user: action.data
      }

    case AUTHENTICATION_FAILED: 
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        isAuthenticated: false,
        userRole: null,
        user: null
      }

    default:
      return state;
  }
}
