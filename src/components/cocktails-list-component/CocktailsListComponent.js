/**
 * ```
 * @prettier
 * ```
 */

export default {
  props: {
    cocktails: {
      type: Array,
      default: () => {
        return [];
      },
    },
    ingredient: {
      type: String,
      default: "",
    },
  },

  methods: {
    buildUpIngredients(cocktail) {
      console.log("cocktail", cocktail);
    },
  },
};
