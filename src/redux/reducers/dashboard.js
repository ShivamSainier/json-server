import {
  GET_ORGANIZATIONS,
  GET_ORGANIZATIONS_PATIENT,
  GET_NOTIFICATIONS,
  GET_ALL_ORG_PATIENT,
  GET_PRIMARY_NOTIFICATIONS,
  GET_USER_DATA,
  GET_CARD_DATA,
  GET_EXERCISE_DATA,
  GET_PAGE_DATA
} from "../constants/dashboard";

import { LOCATION_CHANGED } from "../constants/report";

const initialState = {
  allOrg: null,
  allOrgPatient: null,
  notifications: null,
  allPatients: null,
  primaryNotification: null,
  userData: null,
  cardData: null,
  exerciseData: null,
  pageData: null

}

export default function dashboard(state = initialState, action) {
  switch (action.type) {

    case GET_ORGANIZATIONS:
      return { ...state, allOrg: action.data }

    case GET_ORGANIZATIONS_PATIENT:
      return { ...state, allOrgPatient: action.data }

    case GET_NOTIFICATIONS:
      return { ...state, notifications: action.data }

    case GET_PRIMARY_NOTIFICATIONS:
      return { ...state, primaryNotification: action.data }

    case GET_ALL_ORG_PATIENT:
      return { ...state, allPatients: action.data }

    case GET_USER_DATA:
      return { ...state, userData: action.data }

    case GET_CARD_DATA:
      return { ...state, cardData: action.data.data }

    case GET_EXERCISE_DATA:
      return { ...state, exerciseData: action.data }

    case GET_PAGE_DATA:
      return { ...state, pageData: action.data }

    case LOCATION_CHANGED:
      return initialState

    default:
      return state;
  }
}