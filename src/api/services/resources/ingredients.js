/**
 * ```
 * @prettier
 * ```
 */

import axios from "@/plugins/axios.js";

const apiUrl = process.env.VUE_APP_API_URL;

const IngredientsService = {
  /**
   * It returns ingredients data
   *
   * @param {object} queryParams Request parameters
   * @returns {Promise} Ingredient promise
   */
  index(queryParams = {}) {
    return axios
      .get(`${apiUrl}ingredients`, {
        params: queryParams,
      })
      .then((response) => {
        return response.data;
      });
  },
};

export default IngredientsService;
