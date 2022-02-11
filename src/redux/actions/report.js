import axios from "axios";
import {
  GET_EMPLOYEE_DETAIL,
  LAST_RECENT_TESTS,
  FETCH_VITALS_TABLE_DATA,
  FETCH_VITALS_GRAPH_DATA,
  FETCH_REPORTS,
  HAS_ACCESS,
  LOCATION_CHANGED,
} from "../constants/report";

const REPORT_BASE_URL = `${process.env.REACT_APP_API_URL}/employee/api`;
let headers = { 'Content-Type': 'application/json' };

export const getEmployee = (id) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/api/get-employee-detail/?employee_code=${id}`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: GET_EMPLOYEE_DETAIL, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};


export const fetchVitalsReports = (queryParams) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/api/vital-graph/?${queryParams}`, {
        headers
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: FETCH_VITALS_TABLE_DATA, data: response.data.data })
        dispatch({ type: FETCH_VITALS_GRAPH_DATA, data: response.data.graph_data })
      }
    }
  } catch (error) {
    throw error;
  }
};

export const lastRecentTests = (data) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/api/get-employee-last-test/?profile_id=${data}`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: LAST_RECENT_TESTS, data: response.data.data });
      }
    }
  } catch (error) {
    if(error.response.status === 400){
      dispatch({type: HAS_ACCESS})
    }
    throw error;
  }
};

export const downloadReport = (data) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/api/patient_reports/?profile_id=${data}`, {
        headers
      });
      if (response.status === 200) {
        dispatch({ type: FETCH_REPORTS, data: response.data.data });
      }
    }
  } catch (error) {
    throw error;
  }
};

export const reportUrl = (data) => async (dispatch, getState) => {
  try {
    const token = getState().auth.access_token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/api/get-employee-report/?${data}`, 
      { headers });
      if (response.status === 200) {
        return response
      }
    }
  } catch (error) {
    throw error;
  }
};


export const changeLOC = () => (dispatch, getState) => {
  dispatch({type: LOCATION_CHANGED})
}
