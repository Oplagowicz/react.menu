import React, { useState } from "react";
import getIngredientIcons from "../utilities/Ingredient_Icons";
import getDishImage from "../utilities/Dish_Image";


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


