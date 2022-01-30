import axios from 'axios';
import { setLoader } from '../Store/actions/loader';
import store from "../Store/store"
 export const AxiosInstance = axios.create({
     baseURL : "https://api.themoviedb.org/3/",
     params:{
         api_key: "addc24fa3de68655222e36f0796cadb2"
     }
 })


// Add a request interceptor
AxiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // config["params"]={
    //     "api-key": "api_key=addc24fa3de68655222e36f0796cadb2"
    // }
    store.dispatch(setLoader(true))
     return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
AxiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoader(false))

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });