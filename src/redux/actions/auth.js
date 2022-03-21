import axios from 'axios';
import { toast } from "react-toastify";
import {
  USER_LOGIN_SUCCESS,
  REFRESHED_TOKEN,
  AUTHENTICATION_FAILED,
  GET_USER
} from '../constants/auth';

const ACCOUNT_BASE_URL = `${process.env.REACT_APP_API_URL}/accounts/api`;
let headers = { 'Content-Type': 'application/json' };

export const loginUserSuccess = (tokens) => (dispatch, getState) => {
  localStorage.setItem('access_token', tokens.access_token);
  localStorage.setItem('refresh_token', tokens.refresh_token);
  dispatch({ type: USER_LOGIN_SUCCESS, data: tokens });
};

export const refreshToken = () => async (dispatch, getState) => {
  try {
    const refreshToken = getState().auth.refresh_token;
    const response = await axios.post(
      `https://admin.tracelyfe.com/accounts/api/token/refresh/`,
      { refresh: refreshToken }
    );

    if (response.status === 200) {
      dispatch(
        loginUserSuccess({
          access_token: response.data.access,
          refresh_token: refreshToken
        })
      );
    }
    return dispatch({ type: REFRESHED_TOKEN });
  } catch (error) {
    console.log('900', error, error.response.status);
    dispatch({ type: REFRESHED_TOKEN });
    throw error;
  }
};

export const loginUser = (data) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${ACCOUNT_BASE_URL}/employee/signin/`, data, {
      headers
    });
    if (response.status === 200) {
      console.log("response", response);
      dispatch(
        loginUserSuccess({
          access_token: response.data.data.access,
          refresh_token: response.data.data.refresh
        })
      );
      // dispatch(getUser());
    } else {
      dispatch({ type: AUTHENTICATION_FAILED });
    }
  } catch (error) {
    dispatch({ type: AUTHENTICATION_FAILED });
    throw error;
  }
};

export const logout = () => (dispatch, getState) => {
  dispatch({ type: AUTHENTICATION_FAILED });
  return;
};

export const resetPassword = (data) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${ACCOUNT_BASE_URL}/password/reset/`, data, {
      headers
    });
    if (response.status === 200) {
      toast.success(response.data.message)
      return response;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message)
    }
    throw error;
  }
};


export const getUser = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/api/get-doctor-info/`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: GET_USER, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};
