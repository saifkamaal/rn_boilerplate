// export default function () {
//     return [
//         { title: "City Walk", thumbnail_image: "https://media.glassdoor.com/sqll/835830/meraas-holding-squarelogo-1512973057626.png", image: "https://imgur.com/Q2MA4Gz", author: "Meraas" },
//         { title: "Port De La Mer", thumbnail_image: "https://media.glassdoor.com/sqll/835830/meraas-holding-squarelogo-1512973057626.png", image: "https://imgur.com/846JTxF", author: "Meraas" },
//         { title: "Bulgari Residences", thumbnail_image: "https://media.glassdoor.com/sqll/835830/meraas-holding-squarelogo-1512973057626.png", image: "https://imgur.com/ooQ31pl", author: "Meraas" },
//         { title: "Nikki Beach Residence", thumbnail_image: "https://media.glassdoor.com/sqll/835830/meraas-holding-squarelogo-1512973057626.png", image: "https://imgur.com/xpRObYs", author: "Meraas" }
//     ]
// }

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
    case ACTION_TYPES.NEW_LAUNCHES_FETCHING:
      return {
        ...state,
        isFailed: false,
        isLoading: true
      };
    case ACTION_TYPES.NEW_LAUNCHES_FETCHING_SUCCESS:
      console.log("In", ACTION_TYPES.NEW_LAUNCHES_FETCHING_SUCCESS);
      return {
        ...state,
        isFailed: false,
        isLoading: false,
        data: action.payload.data.data.newLaunches
      };
    case ACTION_TYPES.NEW_LAUNCHES_FETCHING_FAILED:
      return {
        error: error.response.data.message,
        isFailed: true,
        isLoading: false
      };
    default:
      return state;
  }
};
