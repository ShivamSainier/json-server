import { combineReducers } from "redux";
import auth from "./auth";
import dashboard from "./dashboard";
import report from "./report";

export default combineReducers({
  auth,
  dashboard,
  report,
})