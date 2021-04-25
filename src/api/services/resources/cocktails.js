/**
 * ```
 * @prettier
 * ```
 */

import axios from "@/plugins/axios.js";

const apiUrl = process.env.VUE_APP_API_URL;

const CocktailsService = {
  /**
   * It returns cocktails data
   *
   * @param {object} queryParams Request parameters
   * @returns {Promise} Cocktail promise
   */
  index(queryParams = {}) {
    return axios
      .get(`${apiUrl}cocktails`, {
        params: queryParams,
      })
      .then((response) => {
        return response.data;
      });
  },
};

export default CocktailsService;
