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
    /**
     * It gets formatted ingredient from a cocktail
     *
     * @param {object} cocktail Cocktail object to collect ingredients
     * @returns {Array} Array of ingredients with measure
     */
    buildUpIngredients(cocktail) {
      let ingredients = [];

      let stop = false;

      for (let i = 1; stop != true; i++) {
        let strIng = "strIngredient" + i;
        let strMea = "strMeasure" + i;

        if (cocktail[strIng]) {
          let text =
            cocktail[strIng] +
            (cocktail[strMea] ? " / " + cocktail[strMea] : "");
          ingredients.push(text);
        }

        if (!cocktail[strIng]) {
          stop = true;
        }
      }

      return ingredients;
    },
  },
};
