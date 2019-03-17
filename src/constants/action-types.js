export type Action =
  | { type: "PUSH_NEW_ROUTE", route: string }
  | { type: "POP_ROUTE" }
  | { type: "POP_TO_ROUTE", route: string }
  | { type: "REPLACE_ROUTE", route: string }
  | { type: "REPLACE_OR_PUSH_ROUTE", route: string }
  | { type: "OPEN_DRAWER" }
  | { type: "CLOSE_DRAWER" }
  | { type: "SET_USER", name: string }
  | { type: "SET_LIST", list: string };

export type Dispatch = (action: Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;

export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";

export const USER_LOGIN_REQUESTED = "USER_LOGIN_REQUESTED";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const USER_LOGOUT_REQUESTED = "USER_LOGOUT_REQUESTED";

export const NEW_LAUNCHES_FETCHING = "NEW_LAUNCHES_FETCHING";
export const NEW_LAUNCHES_FETCHING_SUCCESS = "NEW_LAUNCHES_FETCHING_SUCCESS";
export const NEW_LAUNCHES_FETCHING_FAILED = "NEW_LAUNCHES_FETCHING_FAILED";

export const UPCOMING_PROJECTS_FETCHING = "UPCOMING_PROJECTS_FETCHING";
export const UPCOMING_PROJECTS_FETCHING_SUCCESS =
  "UPCOMING_PROJECTS_FETCHING_SUCCESS";
export const UPCOMING_PROJECTS_FETCHING_FAILED =
  "UPCOMING_PROJECTS_FETCHING_FAILED";

export const USER_PROJECTS_FETCHING = "USER_PROJECTS_FETCHING";
export const USER_PROJECTS_FETCHING_SUCCESS = "USER_PROJECTS_FETCHING_SUCCESS";
export const USER_PROJECTS_FETCHING_FAILED = "USER_PROJECTS_FETCHING_FAILED";
