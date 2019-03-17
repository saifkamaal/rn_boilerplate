import * as ACTION_TYPES from "../constants/action-types";

export const upcomingProjectsFetching = ({ userId }) => ({
  type: ACTION_TYPES.UPCOMING_PROJECTS_FETCHING,
  payload: {
    client: "default",
    request: { method: "GET", url: "/projects/upcoming" }
  }
});

export const upcomingProjectsSuccess = ({ userId }) => ({
  type: ACTION_TYPES.UPCOMING_PROJECTS_SUCCESS,
  payload: {}
});

export const upcomingProjectsFail = ({ userId }) => ({
  type: ACTION_TYPES.UPCOMING_PROJECTS_FAILED,
  payload: {}
});
