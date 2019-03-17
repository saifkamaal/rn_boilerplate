import { combineReducers } from "redux";
import newLaunches from "./reducer_newlaunches";
import upcomingProjects from "./reducer_upcomingprojects";
import userProjects from "./reducer_userprojects";

import auth from "./auth";

export default combineReducers({
  auth: auth,
  newLaunches: newLaunches,
  upcomingProjects: upcomingProjects,
  userProjects: userProjects
});
