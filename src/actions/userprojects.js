import * as ACTION_TYPES from "../constants/action-types";

export const userProjectsFetching = ({ userId }) => ({
  type: ACTION_TYPES.USER_PROJECTS_FETCHING,
  payload: {
    client: "default",
    request: {
      method: "GET",
      url: "/projects"
    }
  }
});

export const userProjectsSuccess = ({ userId }) => ({
  type: ACTION_TYPES.USER_PROJECTS_FETCHING_SUCCESS,
  payload: {}
});

export const userProjectsFail = ({ userId }) => ({
  type: ACTION_TYPES.USER_PROJECTS_FETCHING_FAILED,
  payload: {}
});
