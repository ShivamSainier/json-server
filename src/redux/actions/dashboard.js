import axios from "axios";
import {
  GET_ORGANIZATIONS,
  GET_ORGANIZATIONS_PATIENT,
  GET_NOTIFICATIONS,
  GET_ALL_ORG_PATIENT,
  GET_PRIMARY_NOTIFICATIONS
} from "../constants/dashboard";
import { getUser } from "./auth";

const DASHBOARD_BASE_URL = `${process.env.REACT_APP_API_URL}/doctor/api`;
let headers = { 'Content-Type': 'application/json' };

export const getOrg = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${DASHBOARD_BASE_URL}/get-doctor-organisation/`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: GET_ORGANIZATIONS, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};

export const getOrgPatients = (data) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${DASHBOARD_BASE_URL}/get-organisation-patient/${data}`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: GET_ORGANIZATIONS_PATIENT, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};

export const fetchQR = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${DASHBOARD_BASE_URL}/get-doctor-qr/`, {
        headers
      });
      if (response.status === 200) {
        console.log("response from QR", response)
        return response
        // dispatch({ type: GET_ORGANIZATIONS_PATIENT, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};



export const getAllOrgPatients = (query) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${DASHBOARD_BASE_URL}/search-profile/?${query}`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: GET_ALL_ORG_PATIENT, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};

export const sendNotificationToPatient = (query) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.post(`${DASHBOARD_BASE_URL}/requested_emp_doc/?${query}`, 
        query, 
        { headers}
      );
      if (response.status === 200) {
        return response
      }
    }
  } catch (error) {
    throw error;
  }
};

/* ============================= Maintain Doctor Status =============================== */

export const changeStatus = (data) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.put(`${DASHBOARD_BASE_URL}/get-doctor-info/`, 
        data, 
        { headers}
      );
      if (response.status === 200) {
        dispatch(getUser())
        return response
      }
    }
  } catch (error) {
    throw error;
  }
};

/**********************
 * Notification Panel Request
 **********************/

export const getGeneralNotifications = (data) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/notification/api/doctor_notification/?${data}`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: GET_NOTIFICATIONS, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};

export const getPrimaryNotifications = (data) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/notification/api/doctor_notification/?${data}`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: GET_PRIMARY_NOTIFICATIONS, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};

export const answerPrimaryNotification = (data) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.put(`${DASHBOARD_BASE_URL}/invitation_status/${data}`, {
        headers
      });
      if (response.status === 200) {
        return response
      }
    }
  } catch (error) {
    throw error;
  }
};