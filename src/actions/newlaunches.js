import * as ACTION_TYPES from "../constants/action-types";

export const newLaunchesFetching = ({ userId }) => ({
  type: ACTION_TYPES.NEW_LAUNCHES_FETCHING,
  payload: {
    client: "default",
    request: {
      method: "GET",
      url: "/projects/new"
    }
  }
});

export const newLaunchesSuccess = ({ userId }) => ({
  type: ACTION_TYPES.NEW_LAUNCHES_SUCCESS,
  payload: {}
});

export const newLaunchesFail = ({ userId }) => ({
  type: ACTION_TYPES.NEW_LAUNCHES_FAILED,
  payload: {}
});
