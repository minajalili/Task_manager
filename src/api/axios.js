import axios from "axios";
import { toast } from "react-toastify";

const api_url = "https://61f91473783c1d0017c44910.mockapi.io/taskManager/";

const axiosInstance = axios.create({
  baseURL: api_url,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    // console.log("error>>>", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    if (response.data.error) {
      toast.error(response.data.error, {
        position: "top-right",
      });
    } else if (response.data.message) {
      toast.success(response.data.message, {
        position: "top-right",
      });
    }
    // console.log("response>>>", response);
    return response;
  },
  function (error) {
    // console.log("response error>>>", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
