// import { getNewAccessToken } from "@/app/services/auth.services";
// import {
//   getFromLocalStorage,
//   setToLocalStorage,
// } from "@/app/utils/local-storage";
// import { authKey } from "@/constants/storageKey";

import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // const accessToken = getFromLocalStorage(authKey);
    // if (accessToken) {
    //   config.headers.Authorization = accessToken;
    // }
    // console.log(accessToken);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor

instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data,
      meta: response?.data?.meta,
    };
    console.log(
      "instance: if any data retrive in network tab but not in console for axios then check here",
      response
    );
    return responseObject;
  },
  async function (error) {
    const config = error?.config;
    if (error?.response?.status === 403 && !config?.sent) {
      config.sent = true;
      //   const response = await getNewAccessToken();
      //   console.log(response);
      //   const accessToken = response?.data?.accessToken;
      //   config.headers["Authorization"] = accessToken;
      //   setToLocalStorage(authKey, accessToken);
      return instance(config);
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.message,
      };
      console.log(error);
      return responseObject;
    }
    // return Promise.reject(error);
  }
);

export { instance };
