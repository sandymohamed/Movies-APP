import axios from "axios";
import { setLoader } from "../redux/actions/loader";
import store from "../redux/store";
export const axiosinstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/"
})

axiosinstance.interceptors.request.use(function (config) {

        config.headers["Authorization"] = "teken of User"
        config["params"] = {

            "api-key": "hello interceptors"
        }

        store.dispatch(setLoader(true));

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosinstance.interceptors.response.use(function (response) {

  store.dispatch(setLoader(false));

    return response;
  }, function (error) {
  
    return Promise.reject(error);
  });

