import axios from "axios";

const ip = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const rootPath = ip + "";

const headers: any = {
  Authorization: "Basic " + window.btoa("coalition:skills-test"),
};

const coalitionApi = axios.create({
  baseURL: rootPath,
  headers: headers,
});

coalitionApi.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error && error.response && error.response.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default coalitionApi;
