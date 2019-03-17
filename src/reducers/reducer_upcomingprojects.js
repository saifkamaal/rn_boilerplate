import * as ACTION_TYPES from "../constants/action-types";

const initialState = {
  isLoading: true,
  error: undefined,
  isFailed: false,
  data: []
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  //console.log("New Launcher Reducer:", type, payload, error);
  console.log("PayLoad:", payload);
  switch (type) {
    case ACTION_TYPES.UPCOMING_PROJECTS_FETCHING:
      return { ...state, isFailed: false, isLoading: true };
    case ACTION_TYPES.UPCOMING_PROJECTS_FETCHING_SUCCESS:
      console.log("In", ACTION_TYPES.UPCOMING_PROJECTS_FETCHING_SUCCESS);
      return {
        ...state,
        isFailed: false,
        isLoading: false,
        data: action.payload.data.data.upcomingProjects
      };
    case ACTION_TYPES.UPCOMING_PROJECTS_FETCHING_FAILED:
      return {
        error: error.response.data.message,
        isFailed: true,
        isLoading: false
      };
    default:
      return state;
  }
};
