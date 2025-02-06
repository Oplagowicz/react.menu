import React, { useState } from "react";

// Function for dynamically loading dish images
const getDishImage = (title) => {
  try {
    return require(`../img/dishes/${title}.png`);
  } catch (error) {
    console.warn(`Image not found for: ${title}`);
    return require("../img/dishes/default.png"); // Fallback image
  }
};

// Function for dynamically loading ingredient icons
const getIngredientIcons = (ingredients) => {
  return ingredients.split(", ").map((ingredients) => {
    try {
      const icon = require(`../img/ingredients/${ingredients}.svg`);
      return { name: ingredients, icon };
    } catch (error) {
      console.warn(`Icon not found for: ${ingredients}`);
      return { name: ingredients, icon: require("../img/ingredients/default.png") }; // Fallback image
    }
  });
};

function Dish({ title, content, ingredients }) {
  const [showDetails, setShowDetails] = useState(false);

  // Loading dish image
  const dishImage = getDishImage(title);

  // Loading ingredient icons
  const ingredientIcons = getIngredientIcons(ingredients);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="menu_list" onClick={handleClick}>
      <img className={`dish_img ${showDetails ? "transparent" : ""}`} src={dishImage} alt={title} />
      
      {showDetails && (
        <div className="dish_details">
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="ingredients">
            {ingredientIcons.map(({ name, icon }, index) => (
              <div key={index} className="ingredients_list">
                <img src={icon} alt={name} className="ingredient_icon" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dish;
