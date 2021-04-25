/**
 * ```
 * @prettier
 * ```
 */

export default {
  props: {
    ingredients: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  methods: {
    /**
     * It emits the ingredient string to parent component
     *
     * @param {string} ingredient Ingredient to be searched for
     * @returns {void}
     */
    searchForCocktails(ingredient) {
      this.$emit("search-for-cocktails", ingredient);
    },
  },
};
