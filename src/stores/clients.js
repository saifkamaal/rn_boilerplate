import axios from "axios/index";
import humps from "humps";
import * as API from "../utils/apis";

const { baseURL, headers } = API.DEV_INSTANCE;
const authClient = baseURL =>
  axios.create({
    baseURL: baseURL,
    headers: headers,
    transformResponse: [
      data => {
        console.log(data);
        return humps.camelizeKeys(JSON.parse(data));
      }
    ]
  });

const clients = {
  default: {
    client: authClient(baseURL)
  }
};

export default clients;