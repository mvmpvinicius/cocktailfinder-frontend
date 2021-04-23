/**
 * ```
 * @prettier
 * ```
 */

import axios from "axios";
import Vue from "vue";

/**
 * It attaches to the request all required header's information
 */
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Throws an error when response is not successfull
 */
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const vm = new Vue();

    vm.$bvToast.toast(error.response.data.exception, {
      title: "Error",
      variant: "danger",
      solid: true,
    });

    return Promise.reject(error);
  }
);

export default axios;