import {
  GET_ORGANIZATIONS,
  GET_ORGANIZATIONS_PATIENT,
  GET_NOTIFICATIONS,
  GET_ALL_ORG_PATIENT,
  GET_PRIMARY_NOTIFICATIONS
} from "../constants/dashboard";

import { LOCATION_CHANGED } from "../constants/report";

const initialState = {
  allOrg: null,
  allOrgPatient: null,
  notifications: null,
  allPatients: null,
  primaryNotification: null
}

export default function dashboard(state = initialState, action){
  switch(action.type){

    case GET_ORGANIZATIONS:
      return { ...state, allOrg: action.data }

    case GET_ORGANIZATIONS_PATIENT:
      return { ...state, allOrgPatient: action.data }

    case GET_NOTIFICATIONS:
      return { ...state, notifications:action.data }

    case GET_PRIMARY_NOTIFICATIONS:
      return { ...state, primaryNotification: action.data }

    case GET_ALL_ORG_PATIENT:
      return { ...state, allPatients: action.data }

    case LOCATION_CHANGED:
      return initialState

    default:
      return state;
  }
}