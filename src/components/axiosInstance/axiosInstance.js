import axios from "axios";
// import {setLoader} from "../store/actions/loader";
// import store from "../store/store";
export const axiosinstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/"
})

axiosinstance.interceptors.request.use(function (config) {
        config.headers["Authorization"] = "teken of User"
        config["params"] = {
            "api-key": "hello interceptors"
        }
        // store.dispatch(setLoader(true));
        console.log("interceptors", config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosinstance.interceptors.response.use(function (response) {
    console.log("interceptors response", response)
  
    return response;
  }, function (error) {
  
    return Promise.reject(error);
  });

