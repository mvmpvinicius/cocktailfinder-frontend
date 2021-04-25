/**
 * ```
 * @prettier
 * ```
 */

/**
 * Components
 */
import CocktailsList from "@/components/cocktails-list-component/CocktailsListComponent.vue";
import IngredientsList from "@/components/ingredients-list-component/IngredientsListComponent.vue";

/**
 * Services
 */
import CocktailsService from "@/api/services/resources/cocktails.js";

export default {
  name: "HomeView",

  components: {
    CocktailsList,
    IngredientsList,
  },

  /**
   * @inheritdoc
   */
  data() {
    return {
      cocktails: null,
      ingredients: null,
      ingredientsModel: null,
      loading: false,
      selectedIngredient: null,
    };
  },

  methods: {
    /**
     * It clears all results
     *
     * @returns {void}
     */
    clearResults() {
      this.cocktails = null;
      this.ingredients = null;
      this.ingredientsModel = null;
    },

    /**
     * It searches all cocktails containing ingredient
     *
     * @param {string} ingredient Ingredient to be searched for
     * @returns {void}
     */
    searchForCocktails(ingredient) {
      if (!ingredient) {
        return;
      }

      const queryParams = {
        "search-for": "cocktails",
        params: ingredient,
      };

      this.loading = true;

      CocktailsService.index(queryParams)
        .then((response) => {
          if (response[0].length === 0) {
            this.$bvToast.toast("No cocktails found", {
              title: "Info",
              variant: "info",
              solid: true,
            });
            return;
          }
          this.cocktails = response[0];
          this.selectedIngredient = ingredient;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    /**
     * it searches for ingredients containing param
     *
     * @returns {void}
     */
    searchForIngredients() {
      if (!this.ingredientsModel) {
        return;
      }

      const queryParams = {
        "search-for": "ingredients",
        params: this.ingredientsModel,
      };

      this.loading = true;

      CocktailsService.index(queryParams)
        .then((response) => {
          if (!response[0]) {
            this.$bvToast.toast("No ingredients found", {
              title: "Info",
              variant: "info",
              solid: true,
            });
            return;
          }
          this.ingredients = response;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
