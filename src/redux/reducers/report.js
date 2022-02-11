import {
  GET_EMPLOYEE_DETAIL,
  LAST_RECENT_TESTS,
  FETCH_VITALS_TABLE_DATA,
  FETCH_VITALS_GRAPH_DATA,
  FETCH_REPORTS,
  HAS_ACCESS,
  LOCATION_CHANGED
} from "../constants/report";

const initialState = {
  employeeProfile: null,
  lastTests: null,
  allReports: {
    previous: null,
    next: null,
    results: []
  },
  bpReadings: null,
  bpGraph: null,
  tempReadings: null,
  tempGraph: null,
  glucoseReadings: null,
  glucoseGraph: null,
  pulseReadings: null,
  pulseGraph: null,
  weightReadings: null,
  weightGraph: null,
  spo2Readings: null,
  spo2Graph: null,
  hasAccess: false,
}

export default function report(state = initialState, action){
  switch(action.type){

    case GET_EMPLOYEE_DETAIL:
      return { ...state, employeeProfile: action.data }

    case LAST_RECENT_TESTS:
      return { ...state, lastTests: action.data }

    case FETCH_REPORTS:
      return { 
        ...state, 
        allReports: {
          previous: action.data.previous,
          next: action.data.next,
          results: [...state.allReports.results, ...action.data.results]
        } 
      }

    case FETCH_VITALS_TABLE_DATA:
      return {
        ...state,
        bpReadings: action.data.blood_pressure,
        tempReadings: action.data.temperature,
        glucoseReadings: action.data.glucose,
        pulseReadings: action.data.pulse,
        weightReadings: action.data.weight,
        spo2Readings: action.data.oxygen_saturation
      }

    case FETCH_VITALS_GRAPH_DATA:
      return {
        ...state,
        bpGraph: action.data.blood_pressure,
        tempGraph: action.data.temperature,
        glucoseGraph: action.data.glucose,
        pulseGraph: action.data.pulse,
        weightGraph: action.data.weight,
        spo2Graph: action.data.oxygen_saturation
      }

    case HAS_ACCESS:
      return { ...state, hasAccess: true }

    case LOCATION_CHANGED: 
      return initialState
    

    default:
      return state;

  }
}