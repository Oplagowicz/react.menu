// Function for dynamically loading ingredient icons
const getIngredientIcons = (ingredientsList) => {
  return ingredientsList.split(", ").map((ingredients) => {
    try {
      const icon = require(`../img/ingredients/${ingredients}.svg`);
      return { name: ingredients, icon:icon };
    } catch (error) {
      console.error(`Icon not found for: ${ingredients}, error: ${error}`);
    }
  });
};

export default getIngredientIcons;